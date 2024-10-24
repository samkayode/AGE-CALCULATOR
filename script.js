function calculateAge(){
    const dob = document.getElementById("dob").value;
    const result = document.getElementById("result");



    if(!dob){
        result.innerHTML = "Please Kindly Enter Your Date Of Birth 😅";
        return;
    }

        const dobDate = new Date(dob);
        const today = new Date();



        let age = today.getFullYear() - dobDate.getFullYear();
        const monthDifference = today.getMonth() - dobDate.getMonth();
        const dayDifference = today.getDate() - dobDate.getDate();
    if(monthDifference < 0 || (monthDifference === 0 && dayDifference < 0 )){
        age--;
    }
    
    
        if(age > 30){
            result.textContent = "Go and marry, my bro 💍";
        } else{
            result.textContent = `You are ${age} years old 🎉`;
        }
}
 function resetField(){
    document.getElementById("dob").value ="";
    document.getElementById("result").textContent ="";
 }
