var perfectVidFrame = function () {
  $("iframe[src*='youtube'], iframe[src*='vimeo']").each(function () {
    $(this).css("width", "100%");
    var vidWidth = $(this).width();
    var vidHeight = vidWidth / 16 * 9;
    $(this).css("height", vidHeight); 
  });
}

perfectVidFrame();

$(window).resize(perfectVidFrame);
