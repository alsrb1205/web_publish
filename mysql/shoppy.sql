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
	upload_file as image,
	source_file as sourceFile,
	pdate
FROM
	shoppy_product
WHERE
	pid =1;    


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

