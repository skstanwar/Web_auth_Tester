import { client } from 'https://unpkg.com/@passwordless-id/webauthn';
window.greetFromModule = client;

async function temp(){
    console.log("function is working");
    const username = document.getElementById("username").value;
    const challenge = "a7c61ef9-dc23-4806-b486-2428938a547e"
    const registration = await client.register(username, challenge, {
        "authenticatorType": "auto",
        "userVerification": "required",
        "timeout": 60000,
        "attestation": false,
        "debug": false
    })
    
    console.log(registration);
    
}
async function temp2(){
    console.log("function is working");
    const username = document.getElementById("username").value;
    const challenge = "a7c61ef9-dc23-4806-b486-2428938a547e"

      const authentication = await client.authenticate([], challenge, {
         "authenticatorType": "auto",
            "userVerification": "required",
            "timeout": 60000
                })
    
    console.log(authentication);
    
}

const my_b= document.getElementById("my_b");
const my_C= document.getElementById("my_C");
my_b.addEventListener("click",temp);
my_C.addEventListener("click",temp2);

