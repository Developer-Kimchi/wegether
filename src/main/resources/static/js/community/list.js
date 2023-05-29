

let page = 1;
let keyword = $(".search-input").val();
console.log(keyword)
showList();

let $registerButton = $('.register-move-button');

// 등록하기폼으로 이동하기 버튼
$registerButton.on("click", function () {
    if (session == null) {
        showWarnModal("<span>로그인 후</span><span>이용해주세요.</span>");
        $('.modal').on("click", () => {
            location.href = '/accounts/login?list=false';
        })
    } else {

        location.href = '/community/write';
    }
})

$('.search-button').on("click", function () {
    keyword = $(".search-input").val();
    console.log(keyword)
    $(".block_extended").html("");
    showList();
})


$(window).scroll(function(){
    if (Math.ceil(window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
        page++;
        console.log(page);
        showList();
    }
});

console.log(Math.ceil(window.innerHeight + window.scrollY))
console.log(page);


function showList(){
    $.ajax({
        url: `/community/list`,
        type: `post`,
        data: JSON.stringify(
            {page: page, keyword: keyword}),
        contentType: "application/json;charset=utf-8",
        success: function(communities){
            let text = "";
            communities.forEach(community => {
                text += `
           <article
                 class="et_pb_post et_pb_post_extra et_pb_text_align_left et-waypoint et_pb_animation_off el_dbe_block_extended image-top post-364941 post type-post status-publish format-standard has-post-thumbnail hentry category-planning-note category-platform-story tag-475 tag-478 tag-485 tag-517 tag-356 tag-363 et-animated comment-wrap"
             >
                 <div class="post-categories">
                     <a
                         href="/community/detail?id=${community.id}"
                         target="_self"
                         rel="category term tag"
                         class="el_category_term el_term_planning-note"
                         style="visibility: hidden"
                     ></a>
                 </div>
                 <div class="post-media-container">
                     <div class="post-media">
                         <a
                             href="/community/detail?id=${community.id}"
                             target="_self"
                             class="entry-featured-image-url"
                             >`
                community.files.forEach(file => {
                    if (file.fileType == "REPRESENTATIVE") {
                        text += `<img
                                 width="1024"
                                 height="600"
                                src="/files/display?fileName=${file.filePath}/${file.fileUuid}_${file.fileName}" class="preview">`;
                    }
                })
                text += ` </a>
                     </div>
                 </div>
                 <div class="post-content">
                     <a
                         href="/community/detail?id=${community.id}"
                         target="_self"
                         class="abs-url"
                         >${community.communityTitle}</a
                     >
                     <h6 class="entry-title">
                         <a
                             href="/community/detail?id=${community.id}"
                             target="_self"
                             >${community.communityTitle}</a
                         >
                     </h6>
                     <div class="post-data">
                         <p>${community.communitySubtitle}</p>
                     </div>
                 </div>
             </article>`

            })
            $(".block_extended").append(text);
        }
    })
}

