// task_1               
//also to turn on jQuery: <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js" integrity="sha512-aVKKRRi/Q/YV+4mjoKBsE4x3H+BkegoM/em46NNlCqNTmUYADjBbeNefNxYV7giUp0VxICtqdrbqU7iVaeZNXA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

$("a[href^='https://']").attr("target", "_blank");  // ^ means 'starts with'


// task_2

$("h2").css('background-color', 'green').find('.inner').css('fontSize', '35px');


// task_3       finds dev elements and moves them before h3 elements (swap places)

$("h3 + div").each(function () { 
     const $divElem = $(this);
     //console.log(this);
     $divElem.prev().before($divElem);
});


// task_4    checkboxes get inactive after having checked 3 of them

const $checkboxes = $(":checkbox");
$checkboxes.on("click", ()=>{
    if ($(":checkbox:checked").length == 3) {
        $checkboxes.attr("disabled", "true");
    }
})