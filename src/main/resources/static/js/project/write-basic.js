$(function () {

    $(".ok-button").attr('disabled', true);
    history.replaceState({}, null, location.pathname);

    <!-- 모달 부분 js -->

    let modalCheck;
    function showWarnModal(modalMessage) {
        modalCheck = false;
        $('div#content-wrap').html(modalMessage);
        $('div.warn-modal').css('animation', 'popUp 0.5s');
        $('div.modal').css('display', 'flex').hide().fadeIn(500);
        setTimeout(function () {
            modalCheck = true;
        }, 300);
    }

    $('div.modal').on('click', function () {
        if (modalCheck) {
            $('div.warn-modal').css('animation', 'popDown 0.5s');
            $('div.modal').fadeOut(500);
        }
    });


    <!-- 유효성 검사 -->
    <!-- 여기 부분 다른 곳 작업 끝나면 유효성 검사 추가 -->
    let titleCheck = false;
    let priceCheck = false;
    let schoolCheck = false;
    let majorCheck = false;
    let contentCheck = false;

    $('#dataTitle').on('keyup', function () {
        // 자료 제목 유효성 검사
        if ($(this).val() == '') {
            showWarnModal('자료 제목을 입력해주세요');
            document.writeForm.dataTitle.focus();
            titleCheck = false;
            flagCheck();
            return false;
        } else {
            titleCheck = true;
            flagCheck();
            return false;
        }
        flagCheck();
    });



    $('#dataContent').on('keyup', function () {
        console.log("들어는 옴");
        // 자료 내용 유효성 검사
        if ($(this).val() == '') {
            console.log("여기는 실패");
            showWarnModal('자료 내용을 입력해주세요');
            document.writeForm.dataContent.focus();
            contentCheck = false;
            flagCheck();
            return false;
        } else {
            console.log("여기는 성공");
            contentCheck = true;
            console.log("자료내용 체크 : " + contentCheck);
            flagCheck();
            return false;
        }
        flagCheck();
    });



    // flag check
    function flagCheck() {

        console.log("title" + titleCheck);
        console.log("price" + priceCheck);
        console.log("school" + schoolCheck);
        console.log("major" + majorCheck);
        console.log("content" + contentCheck);
        if (titleCheck && priceCheck && schoolCheck && majorCheck && contentCheck) {
            console.log('gogo');
            $(".ok-button").attr('disabled', false);
        } else {
            $(".ok-button").attr('disabled', true);
        }
    }




}); //E