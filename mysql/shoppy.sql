/**
	SHOPPY 테이블 정의
*/
-- shoppy_member 테이블 생성
USE HRDB2019;
SELECT DATABASE();
SHOW TABLES;

-- SHOPPY로 시작하는 모든 테이블 조회
SELECT * FROM INFORMATION_SCHEMA.TABLES
WHERE TABLE_NAME LIKE 'SHOPPY%';
CREATE TABLE SHOPPY_MEMBER(
		ID				VARCHAR(30)		PRIMARY KEY,
		PWD				VARCHAR(50)		NOT NULL,
        NAME			VARCHAR(10)		NOT NULL,
        PHONE			CHAR(13)		NOT NULL,
        EMAILNAME		VARCHAR(20)		NOT NULL,
        EMAILDOMAIN		VARCHAR(20)		NOT NULL,
        ZIPCODE			CHAR(5),
        ADDRESS			VARCHAR(80),
        MDATE			DATETIME
);

DESC SHOPPY_MEMBER;
SELECT * FROM SHOPPY_MEMBER;

-- 'TEST' 중복체크 : 결과를 COUNT 함수로 반환
SELECT COUNT(ID) AS result FROM SHOPPY_MEMBER WHERE ID = 'TEST9';
-- {result : 0} -- sql에서 대문자로 적으면 리액트에서도 대문자로 적어야함

-- login 
select count(*) as result_rows from shoppy_member where id = 'test1' and pwd = '1234';



use hrdb2019;
select database();

select * from information_schema.tables
	where table_name like 'shoppy%';
    

use hrdb2019;
select database();
show tables;
drop table shoppy_product;
-- shoppy_product

create table shoppy_product(
	pid		int				primary key		auto_increment,
    pname	varchar(50)			not null,
    price	int,
    description		varchar(200),
    upload_file		json,
    source_file		json,
    pdate			datetime
);

desc shoppy_product;
select * from shoppy_product;
set sql_safe_updates = 0;

select pid,
	   pname as name,
	   price,
	   description as info,
	   concat('http://localhost:9000/',upload_file->>'$[0]') as image,
	   source_file,
	   pdate
 from shoppy_product;

select source_file from shoppy_product;

delete from shoppy_product;
commit;

SELECT 
    pid,
    pname,
    price,
    description,
    upload_file AS uploadFile,
    source_file AS sourceFile,
    pdate
FROM
    shoppy_product
WHERE
    pid = 3;
    
    
SELECT 
    pid,
    pname,
    price,
    description,
    upload_file AS image,
    source_file AS sourceFile,
    pdate
FROM
    shoppy_product
WHERE
    pid = 1;    


SELECT 
	pid,
	pname,
	price,
	description,
	upload_file as image,
	source_file as sourceFile,
	pdate,
	concat('http://localhost:9000/',upload_file->>'$[0]') as firstImage,
	-- json_array() 사용해서 imgList 배열만듬
	json_array(
		concat('http://localhost:9000/',upload_file->>'$[0]'),
		concat('http://localhost:9000/',upload_file->>'$[1]'),
		concat('http://localhost:9000/',upload_file->>'$[2]')
	) as imgList,
	json_arrayagg(
		concat('http://localhost:9000/',jt.filename)
	) as detailImgList
FROM
	shoppy_product, 
	-- json_table(테이블.컬럼명,매핑데이터 columns(컬럼 생성 후 리턴)) as jt 
	json_table(shoppy_product.upload_file,'$[*]'
			   columns(filename varchar(100) path '$')) as jt
WHERE
	pid = 11
	group by pid;

-- pid, pname, price, description, upload_file 0번지 이미지
select pid,
	   pname,
       price,
       description,
       concat('http://localhost:9000/',upload_file->>'$[0]') as image
from shoppy_product
where pid in (3,5,1,7,4,11,10);

select * from shoppy_product;
select * from shoppy_member;
-- 어떤 회원(pk:id)이 어떤 상품(pk:pid)을 장바구니에 넣었는지 명확, 간단하게!!!!!!!!!!!!!

-- shoppy_cart
-- 컬럼리스트 : cid(pk), id(shoppy_member:fk(참조키)), pid(shoppy_product:fk), size, qty, cdate(장바구니 등록날짜)
desc shoppy_member;
desc shoppy_product;

create table shoppy_cart(
cid 	int				primary key 		auto_increment,
size	varchar(10)		not null,
qty		int				not null,
cdate	datetime,
id		varchar(30)		not null,		
pid		int				not null,
-- constraint 제약명 foreign key(카트에서 정한 컬럼명) 
-- 			       reference (참조하는 테이블과 컬럼명) 
constraint fk_id_shoppy_member_id foreign key(id)
								  references shoppy_member(id),
constraint fk_pid_shoppy_product_pid foreign key(pid)
								  references shoppy_product(pid)
);
use hrdb2019;
show tables;
desc shoppy_cart;
select * from shoppy_cart;
drop table shoppy_cart;

truncate table shoppy_cart;

insert into shoppy_cart(size, qty, cdate, id, pid)
	values('XS', 2, now(), 'test2', 10);
    
-- shoppy_cart, shoppy_member, shoppy_product 조인
select sc.cid,
	   sc.size,
       sc.qty,
       sm.zipcode,
       sm.address,
       sp.pid,
       sp.pname,
       sp.price,
       sp.description as info,
       concat('http://localhost:9000/',sp.upload_file->>'$[0]') as image
	from shoppy_cart sc,
		 shoppy_member sm,
         shoppy_product sp
	where sc.id = sm.id and sc.pid = sp.pid and sm.id = 'test1';
