// 년,월,일 가져오기
const txtYear = document.querySelector("#txtYear");
const selMon = document.querySelector("#selMon");
const selDay = document.querySelector("#selDay");

const init = () => {
  // 어제 날짜 구하기
  const today = new Date();
  console.log(today);
  // 년,월,일 분리 => 요소 안에 보여주기
  const year = today.getFullYear();
  const month = today.getMonth() + 1; // 월은 0부터 시작이라 +1
  const day = today.getDate() - 1; // 어제는 -1

  txtYear.value = year;
  selMon.value = month < 10 ? "0" + month : month;
  selDay.value = day < 10 ? "0" + day : day;
};
init();

document.querySelector("button").addEventListener("click", () => {
  //사용자가 입력한 년,월,일 가져오기
  const targetDt = txtYear.value + selMon.value + selDay.value;

  const url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=ebdc7449b5f04d0f36e65dd559faf049&targetDt=${targetDt}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.boxOfficeResult);
      console.log(data.boxOfficeResult.dailyBoxOfficeList);

      const boxList = data.boxOfficeResult.dailyBoxOfficeList;
      let list = ``;
      boxList.forEach((movie) => {
        // 순위    영화명 ,
        // rank    rankInten , movieNm
        // (▲ 1) ,  승부  ,

        // console.log(movie.rank);
        // console.log(movie.rankInten);
        // console.log(movie.movieNm);

        list += `${movie.rank} 위`;

        const rankInten = parseInt(movie.rankInten);
        if (rankInten > 0) {
          list += "( ▲ ";
        } else if (rankInten < 0) {
          list += "( ▼ ";
        } else {
          list += "( ";
        }
        list += `${movie.rankInten} )`;

        list += `<a href='#'onclick='javascript:movieInfo(${movie.movieCd})'>${movie.movieNm}</a>`;
        list += `<br>`;
      });
      console.log(list);
      document.querySelector("#rank").innerHTML = list;
    });
});

// 영화 상세 정보
const movieInfo = (movieCd) => {
  console.log(movieCd);
  const url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=ebdc7449b5f04d0f36e65dd559faf049&movieCd=${movieCd}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      //   console.log(data.movieInfoResult.movieInfo);

      //   const peopleList = data.movieInfoResult.movieInfo;
      //   let list = ``;

      //   // 영화제목 movieNm
      //   list += `"영화제목"${people.movieNm}`;
      //   // 영어제목 movieNmEn
      //   list += `"영화제목(영문)"${people.movieNmEn}`;
      //   // 상영시간 showTm
      //   list += `"상영시간"${people.showTm}`;
      //   // 감독이름 directors.peopleNm
      //   list += `"감독"${people.directors[0].peopleNm}`;

      //   // 배우들 actors.peopleNm
      //   actors.forEach((actor) => {
      //     list += `"배우들"${actor.peopleNm}`;
      //   });
      //   console.log(list);
      //   document.querySelector(".info").innerHTML = list;

      let result = ``;

      const movieInfo = data.movieInfoResult.movieInfo;
      const movieNm = movieInfo.movieNm;
      const movieNmEn = movieInfo.movieNmEn;
      const showTm = movieInfo.showTm;

      result += `<ul>`;
      result += `<li>영화제목 : ${movieNm}</li>`;
      result += `<li>영화제목(영문) : ${movieNmEn}</li>`;
      result += `<li>상영시간 : ${showTm}</li>`;

      //감독
      //   let directorNm = movieInfo.directors
      //     .map((director) => {
      //       director.peopleNm;
      //     })
      //     .join(", ");
      let directorNm = "";
      movieInfo.directors.forEach((director) => {
        console.log(director);
        console.log(director.peopleNm);

        directorNm += director.peopleNm + ", ";
      });
      result += `<li>감독 : ${directorNm}</li>`;

      let actorNm = "";
      movieInfo.actors.forEach((actor) => {
        actorNm += actor.peopleNm + ",";
      });
      result += `<li>배우 : ${actorNm}</li>`;
      result += `</ul>`;

      document.querySelector("#info").innerHTML = result;
    });
};
