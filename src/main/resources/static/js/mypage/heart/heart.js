// const all=document.querySelector(".all button");
// const project=document.querySelector(".all project");
// const data=document.querySelector(".all data");

const $all=$(".all button");
const $project=$(".project button");
const $data=$(".data button");

console.log("들어오나");


const $elements=$(".ProjectCardList_container__2Q0Js");

all()

$elements.empty();

function all(){
    $.ajax({
        url: "all",
        success: function (hearts) {
            console.log("들어옴");
            let text=``;
            console.log("dd");
            hearts.forEach((heart, i) => {
                text += `
               
                <li class="ProjectCardList_cardList__Eh497 allofheart">
              <div class="ProjectCard_container__1jpWF App_projectCard__2z3D2">
                <a
                  class="ProjectCard_card__EvFnb"
                  href="/web/store/detail/3855?_refer_section_st=찜하기_상품카드_스토어_0"
                  data-ec-id="3855"
                  data-ec-name="5개동시 고속충전가능 쿨린MAX 50000mAh보조배터리"
                  data-ec-brand="와디즈 주식회사"
                  data-ec-category="테크·가전"
                  data-ec-list="찜하기_상품카드_스토어"
                  data-ec-position="0"
                  data-ec-price="54900"
                  data-ec-contenttype="STORE"
                  data-gtm-vis-recent-on-screen-11319722_2073="2510"
                  data-gtm-vis-first-on-screen-11319722_2073="2510"
                  data-gtm-vis-total-visible-time-11319722_2073="2000"
                  data-gtm-vis-recent-on-screen-11319722_2115="2510"
                  data-gtm-vis-first-on-screen-11319722_2115="2510"
                  data-gtm-vis-total-visible-time-11319722_2115="2000"
                  data-gtm-vis-has-fired-11319722_2073="1"
                  data-gtm-vis-has-fired-11319722_2115="1"
                  ><div class="ProjectCard_thumbnailBox__3nf2n">
                    <div
                      aria-hidden="true"
                      class="ProjectCard_projectCardImage__1wSoK CardThumbnail_thumbnail__3bDBJ CardThumbnail_visible__343f4"
                      style="
                        background-image: url('https://cdn2.wadiz.kr/2022/12/12/26263237-fb52-48af-8cbd-333502ab8fb9.jpg/wadiz/resize/400/format/jpg/quality/85/');
                      "
                    ></div>
                    <em class="ProductTypeBadge_badge__1vQ-m ProjectCard_badge___LsIT">${heart.name}</em>
                  </div>
                  <div class="ProjectCard_infoBox__3ILIU">
                    <div
                      class="ProjectInfo_container__aMXhM ProjectInfo_containerStore__2hufL ProjectCard_projectInfoStore__21AkS"
                    >
                      <div class="ProjectInfo_flexBox__1VtoL">
                        <em class="ProjectInfo_state__3kvLA"
                          >${heart.title} <span class="ProjectInfo_unit__2GehO"></span></em
                        >
                      </div>
                    </div>
                    <strong class="ProjectCard_title__3ZLcD"
                      >${heart.contents}</strong
                    >
                    <dl class="ProjectCard_subInfo__nidZs">
                      <dt class="ProjectCard_fontBlind__2JaYu">카테고리</dt>
                      <dd class="ProjectCard_subInfoText__-pKhs">${heart.info}</dd>
                      <dt class="ProjectCard_fontBlind__2JaYu"></dt>
                      <dd class="ProjectCard_subInfoText__-pKhs ProjectCard_ellipsis1__3fNOy">
                        ${heart.sub}
                      </dd>
                    </dl>
                  </div>
                  <div class="CardSpinner_container__1cKRs">
                    <div class="CardSpinner_loader__2-LrZ" style="width: 32px; height: 32px">
                      <svg viewBox="25 25 50 50" aria-label="Loading">
                        <g class="Loader_circular__2dy3E">
                          <circle
                            class="Loader_path__2uhmv"
                            cx="50"
                            cy="50"
                            r="20"
                            fill="none"
                            stroke-width="4"
                            stroke-miterlimit="10"
                          ></circle>
                        </g>
                      </svg>
                    </div></div></a
<!--                ><button-->
<!--                  type="button"-->
<!--                  class="WishButton_button__1ZqbG WishButton_interaction__2FCel"-->
<!--                  aria-label="찜하기 버튼"-->
<!--                  aria-pressed="true"-->
<!--                  data-ga-category="공통_상품카드_스토어"-->
<!--                  data-ga-action="찜하기_취소"-->
<!--                  data-ga-label=""-->
<!--                >-->
<!--                  <svg-->
<!--                    viewBox="0 0 32 32"-->
<!--                    focusable="false"-->
<!--                    role="presentation"-->
<!--                    class="withIcon_icon__3VTbq"-->
<!--                    aria-hidden="true"-->
<!--                  >-->
<!--                    <path-->
<!--                      d="M22.16 4h-.007a8.142 8.142 0 0 0-6.145 2.79A8.198 8.198 0 0 0 9.76 3.998a7.36 7.36 0 0 0-7.359 7.446c0 5.116 4.64 9.276 11.6 15.596l2 1.76 2-1.76c6.96-6.32 11.6-10.48 11.6-15.6v-.08A7.36 7.36 0 0 0 22.241 4h-.085z"-->
<!--                    ></path>-->
<!--                  </svg>-->
<!--                </button>-->
              </div>
            </li>
              
               
                `
            })



        $('.ProjectCardList_container__2Q0Js').append(text);}

    });


}


function project(){
    $.ajax({
        url: "project",
        success: function (projects) {
            console.log("프로젝트 함수 들어옴");
            let text=``;
            console.log("dd");
            projects.forEach((project, i) => {
                text += `
               
                <li class="ProjectCardList_cardList__Eh497 projectli" onclick="location.href='/project/detail?id=${project.id}'">
              <div class="ProjectCard_container__1jpWF App_projectCard__2z3D2">
                <a
                  class="ProjectCard_card__EvFnb"
                  href="/web/store/detail/3855?_refer_section_st=찜하기_상품카드_스토어_0"
                  data-ec-id="3855"
                  data-ec-name="5개동시 고속충전가능 쿨린MAX 50000mAh보조배터리"
                  data-ec-brand="와디즈 주식회사"
                  data-ec-category="테크·가전"
                  data-ec-list="찜하기_상품카드_스토어"
                  data-ec-position="0"
                  data-ec-price="54900"
                  data-ec-contenttype="STORE"
                  data-gtm-vis-recent-on-screen-11319722_2073="2510"
                  data-gtm-vis-first-on-screen-11319722_2073="2510"
                  data-gtm-vis-total-visible-time-11319722_2073="2000"
                  data-gtm-vis-recent-on-screen-11319722_2115="2510"
                  data-gtm-vis-first-on-screen-11319722_2115="2510"
                  data-gtm-vis-total-visible-time-11319722_2115="2000"
                  data-gtm-vis-has-fired-11319722_2073="1"
                  data-gtm-vis-has-fired-11319722_2115="1"
                  ><div class="ProjectCard_thumbnailBox__3nf2n">
                    <div
                      aria-hidden="true"
                      class="ProjectCard_projectCardImage__1wSoK CardThumbnail_thumbnail__3bDBJ CardThumbnail_visible__343f4"
                      style="
                        background-image: url('https://cdn2.wadiz.kr/2022/12/12/26263237-fb52-48af-8cbd-333502ab8fb9.jpg/wadiz/resize/400/format/jpg/quality/85/');
                      "
                    ></div>
                    <em class="ProductTypeBadge_badge__1vQ-m ProjectCard_badge___LsIT">프로젝트</em>
                  </div>
                  <div class="ProjectCard_infoBox__3ILIU">
                    <div
                      class="ProjectInfo_container__aMXhM ProjectInfo_containerStore__2hufL ProjectCard_projectInfoStore__21AkS"
                    >
                      <div class="ProjectInfo_flexBox__1VtoL">
                        <em class="ProjectInfo_state__3kvLA"
                          >${project.projectTitle} <span class="ProjectInfo_unit__2GehO"></span></em
                        >
                      </div>
                    </div>
                    <strong class="ProjectCard_title__3ZLcD"
                      >${project.projectIntroducing} </strong
                    >
                    <dl class="ProjectCard_subInfo__nidZs">
                      <dt class="ProjectCard_fontBlind__2JaYu">카테고리</dt>
                      <dd class="ProjectCard_subInfoText__-pKhs"> ${project.info}</dd>
                      <dt class="ProjectCard_fontBlind__2JaYu">메이커</dt>
                      <dd class="ProjectCard_subInfoText__-pKhs ProjectCard_ellipsis1__3fNOy">
                       ${project.now}
                      </dd>
                    </dl>
                  </div>
                  <div class="CardSpinner_container__1cKRs">
                    <div class="CardSpinner_loader__2-LrZ" style="width: 32px; height: 32px">
                      <svg viewBox="25 25 50 50" aria-label="Loading">
                        <g class="Loader_circular__2dy3E">
                          <circle
                            class="Loader_path__2uhmv"
                            cx="50"
                            cy="50"
                            r="20"
                            fill="none"
                            stroke-width="4"
                            stroke-miterlimit="10"
                          ></circle>
                        </g>
                      </svg>
                    </div></div></a
<!--                ><button-->
<!--                  type="button"-->
<!--                  class="WishButton_button__1ZqbG WishButton_interaction__2FCel"-->
<!--                  aria-label="찜하기 버튼"-->
<!--                  aria-pressed="true"-->
<!--                  data-ga-category="공통_상품카드_스토어"-->
<!--                  data-ga-action="찜하기_취소"-->
<!--                  data-ga-label=""-->
<!--                >-->
<!--                  <svg-->
<!--                    viewBox="0 0 32 32"-->
<!--                    focusable="false"-->
<!--                    role="presentation"-->
<!--                    class="withIcon_icon__3VTbq"-->
<!--                    aria-hidden="true"-->
<!--                  >-->
<!--                    <path-->
<!--                      d="M22.16 4h-.007a8.142 8.142 0 0 0-6.145 2.79A8.198 8.198 0 0 0 9.76 3.998a7.36 7.36 0 0 0-7.359 7.446c0 5.116 4.64 9.276 11.6 15.596l2 1.76 2-1.76c6.96-6.32 11.6-10.48 11.6-15.6v-.08A7.36 7.36 0 0 0 22.241 4h-.085z"-->
<!--                    ></path>-->
<!--                  </svg>-->
<!--                </button>-->
              </div>
            </li>
               
               
                `
            })



            $('.ProjectCardList_container__2Q0Js').append(text);}

    });


}



function data(){
    $.ajax({
        url: "data",
        success: function (datas) {
            console.log("들어옴");
            let text=``;
            console.log("dd");
            datas.forEach((data, i) => {
                console.log(data);
                text += `
             
                <li class="ProjectCardList_cardList__Eh497 projectli" onclick="location.href='/datas/detail?id=${data.id}'">
              <div class="ProjectCard_container__1jpWF App_projectCard__2z3D2">
                <a
                  class="ProjectCard_card__EvFnb"
                  href="/web/store/detail/3855?_refer_section_st=찜하기_상품카드_스토어_0"
                  data-ec-id="3855"
                  data-ec-name="5개동시 고속충전가능 쿨린MAX 50000mAh보조배터리"
                  data-ec-brand="와디즈 주식회사"
                  data-ec-category="테크·가전"
                  data-ec-list="찜하기_상품카드_스토어"5개동시 고속충전가능 쿨린MAX 50000mAh보조배터리
                  data-ec-position="0"
                  data-ec-price="54900"
                  data-ec-contenttype="STORE"
                  data-gtm-vis-recent-on-screen-11319722_2073="2510"
                  data-gtm-vis-first-on-screen-11319722_2073="2510"
                  data-gtm-vis-total-visible-time-11319722_2073="2000"
                  data-gtm-vis-recent-on-screen-11319722_2115="2510"
                  data-gtm-vis-first-on-screen-11319722_2115="2510"
                  data-gtm-vis-total-visible-time-11319722_2115="2000"
                  data-gtm-vis-has-fired-11319722_2073="1"
                  data-gtm-vis-has-fired-11319722_2115="1"
                  ><div class="ProjectCard_thumbnailBox__3nf2n">
                    <div
                      aria-hidden="true"
                      class="ProjectCard_projectCardImage__1wSoK CardThumbnail_thumbnail__3bDBJ CardThumbnail_visible__343f4"
                      style="
                        background-image: url('https://cdn2.wadiz.kr/2022/12/12/26263237-fb52-48af-8cbd-333502ab8fb9.jpg/wadiz/resize/400/format/jpg/quality/85/');
                      "
                    ></div>
                    <em class="ProductTypeBadge_badge__1vQ-m ProjectCard_badge___LsIT">자료</em>
                  </div>
                  <div class="ProjectCard_infoBox__3ILIU">
                    <div
                      class="ProjectInfo_container__aMXhM ProjectInfo_containerStore__2hufL ProjectCard_projectInfoStore__21AkS"
                    >
                      <div class="ProjectInfo_flexBox__1VtoL">
                        <em class="ProjectInfo_state__3kvLA"
                          >${data.dataTitle} <span class="ProjectInfo_unit__2GehO"></span></em
                        >
                      </div>
                    </div>
                    <strong class="ProjectCard_title__3ZLcD"
                      >${data.dataContent}</strong
                    >
                    <dl class="ProjectCard_subInfo__nidZs">
                      <dt class="ProjectCard_fontBlind__2JaYu">카테고리</dt>
                      <dd class="ProjectCard_subInfoText__-pKhs">${data.info}</dd>
                      <dt class="ProjectCard_fontBlind__2JaYu">메이커</dt>
                      <dd class="ProjectCard_subInfoText__-pKhs ProjectCard_ellipsis1__3fNOy">
                       ${data.price}
                      </dd>
                    </dl>
                  </div>
                  <div class="CardSpinner_container__1cKRs">
                    <div class="CardSpinner_loader__2-LrZ" style="width: 32px; height: 32px">
                      <svg viewBox="25 25 50 50" aria-label="Loading">
                        <g class="Loader_circular__2dy3E">
                          <circle
                            class="Loader_path__2uhmv"
                            cx="50"
                            cy="50"
                            r="20"
                            fill="none"
                            stroke-width="4"
                            stroke-miterlimit="10"
                          ></circle>
                        </g>
                      </svg>
                    </div></div></a
<!--                ><button-->
<!--                  type="button"-->
<!--                  class="WishButton_button__1ZqbG WishButton_interaction__2FCel"-->
<!--                  aria-label="찜하기 버튼"-->
<!--                  aria-pressed="true"-->
<!--                  data-ga-category="공통_상품카드_스토어"-->
<!--                  data-ga-action="찜하기_취소"-->
<!--                  data-ga-label=""-->
<!--                >-->
<!--                  <svg-->
<!--                    viewBox="0 0 32 32"-->
<!--                    focusable="false"-->
<!--                    role="presentation"-->
<!--                    class="withIcon_icon__3VTbq"-->
<!--                    aria-hidden="true"-->
<!--                  >-->
<!--                    <path-->
<!--                      d="M22.16 4h-.007a8.142 8.142 0 0 0-6.145 2.79A8.198 8.198 0 0 0 9.76 3.998a7.36 7.36 0 0 0-7.359 7.446c0 5.116 4.64 9.276 11.6 15.596l2 1.76 2-1.76c6.96-6.32 11.6-10.48 11.6-15.6v-.08A7.36 7.36 0 0 0 22.241 4h-.085z"-->
<!--                    ></path>-->
<!--                  </svg>-->
<!--                </button>-->
              </div>
            </li>
             
               
                `
            })



            $('.ProjectCardList_container__2Q0Js').append(text);}

    });


}
$project.on("click", function () {
    // $projectli.show();
    // $allofheart.hide();
    // $datali.hide();

    $elements.empty();

    console.log("프로젝트 들어옴");
    project()

    $all.css("border-color", "#f2f4f6");
    $all.css("background-color", "#f2f4f6");
    $project.css("border-color", "#8CE0FF");
    $project.css("background-color", "#8CE0FF");
    $data.css("border-color", "#f2f4f6");
    $data.css("background-color", "#f2f4f6");


    });


$all.on("click", function () {
    // $allofheart.show();
    //
    // $projectli.hide();
    // $datali.hide();


    $elements.empty();
    all()
    console.log("들어옴");
    // $elements.show();
    $all.css("border-color", "#8CE0FF");
    $all.css("background-color", "#8CE0FF");
    $project.css("border-color", "#f2f4f6");
    $project.css("background-color", "#f2f4f6");
    $data.css("border-color", "#f2f4f6");
    $data.css("background-color", "#f2f4f6");

});

$data.on("click", function () {
    // $datali.show();
    // $allofheart.hide();
    // $projectli.hide();
    $elements.empty();

    data()
    // $elements.hide();
    $all.css("border-color", "#f2f4f6");
    $all.css("background-color", "#f2f4f6");
    $project.css("border-color", "#f2f4f6");
    $project.css("background-color", "#f2f4f6");
    $data.css("border-color", "#8CE0FF");
    $data.css("background-color", "#8CE0FF");


});