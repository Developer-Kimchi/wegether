$(document).ready(function(){
    const $img_span = $(".et_pb_image_wrap")


    console.log("들옴");

    let text = "";
    files.forEach(file => {
        text += `
                <img
                    width="1280"
                    height="750"
                    src="/files/display?fileName=${file.filePath}/${file.fileUuid}_${file.fileName}"
                    sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) and (max-width: 980px) 980px, (min-width: 981px) 1280px, 100vw"
                    class="wp-image-364958"
                >
           `
    });

    $img_span.append(text);

    console.log($div)
});

