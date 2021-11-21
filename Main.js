var names=[];

function submit(){
    var name_1=document.getElementById("name_student_1").value;
    var name_2=document.getElementById("name_student_2").value;
    var name_3=document.getElementById("name_student_3").value;
    var name_4=document.getElementById("name_student_4").value;

    names.push(name_1)
    names.push(name_2)
    names.push(name_3)
    names.push(name_4)
    console.log(names)
    document.getElementById("div").innerHTML=names;
    document.getElementById("button_submit").style.display="none";
    document.getElementById("button_sort").style.display="inline-block";
    
}
function sorting(){
names.sort();
document.getElementById("div").innerHTML=names;

}
