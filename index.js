function add_on_display(value){
    document.getElementById('display').value+=value;
}

function clearDisplay(){
    document.getElementById('display').value='';
}
function calculateResult(){
    try{
        const result=eval(document.getElementById('display').value);
        document.getElementById('display').value=result;
    }catch(error){
        document.getElementById('display').value = 'Error';
    }
}
function del() {
    let displayValue = document.getElementById('display').value;
    document.getElementById('display').value = displayValue.slice(0, -1);
}
