// Your jQuery Logic will go here
// on button click add input value to the ordered lists

$('button').click(()=>{
    event.preventDefault()
    let input = $('input:text').val()
    $('ol').append('<li class="strik">'+ input + "</li>")
    $('input').val('')
}
)
$('ol').on("click", ".strik", ()=>{
    $(event.target).css('text-decoration','line-through');
});
// on button click add check , or button down to strike through

