import MovieChartTitle from "./MovieChartTitle";
import MovieChartContent from "./MovieChartContent";
export default function MovieChart() {
    return (
        <div className="content-moviechart content-padding">
            <div>

                <MovieChartTitle text1="무비차트" text2="상영예정작" text3="전체보기" />
                <MovieChartContent />
            </div>
        </div>
    );
}