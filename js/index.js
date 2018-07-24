//TOGGLE help
$(".btn-help").click(function() {
    $(".help").toggle("fast", function() {
    });
});
(function() {
	var today = new Date();
	var date = today.toDateString(); //January is 0!
	var yyyy = today.getFullYear();
    $('#year').text(yyyy);
    $('#date').text(date);
    $.getJSON('https://raw.githubusercontent.com/FahadYousafMahar/UrduPoetryTab/master/json/db.json', function(result){
        var obj = result.poetry;
        var num = Math.floor(Math.random() * obj.length);
        $('#poetry').text(obj[num][0]);
        $('#poetr').text(obj[num][1]);
        $('#poet').html(' - ' + obj[num][2]);
    });
			
})();