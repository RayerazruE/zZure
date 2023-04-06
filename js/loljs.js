//모든 불러들인 대상을 표현함
//css_line의 버튼을 누름에따라 표현방식이 달라짐
//choiceline[]값에 따라 하위항목이 달라짐
//지정된 클래스 all top jug mid adc sup 별로 불러옴

//function css_line()



//----------------------

//전체[0~5]를 눌렀을때, 클래스에 포함된 것들만 보여준다.

//탑[1]버튼을 눌렀을때 함수
//모든 img display=none;를 한다음
//함수내에서 클래스가 top인 다수 개의 img를 display=""로 한다.


function remove(){
    document.getElementsByClassName('css_line')[0].style.display = "none";
    document.getElementsByClassName('all')[0].style.display = "none";
}