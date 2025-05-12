function nextfield(){
    const oct = document.getElementById('octetCount').value;
    const container = document.getElementById('inputFields');
  
    if (oct != 4) {
        alert("Please enter valid octet number (only 4 allowed for IPv4).");
        return;
    }

    if(oct == 4){
    container.innerHTML =`
    <lebel for="heading" style= "color: #E0FFFF;font-size:22px;font-family: Arial, sans-serif;">Enter Any IP Address</label>
    <input type="text" id="ipInput" placeholder="Enter IP address"  style="width: 220px;height: 20px;font-size: 20px;font-family: Arial, Helvetica, sans-serif;margin-right:13px;"><br>
    <button  onclick="validateIP()" style="width: 100px;height: 30px;font-size: 20px;font-family: Arial, Helvetica, sans-serif;margin-top:15px;">Submit </button>`;
    }

}
function validateIP() {
    const ip = document.getElementById('ipInput').value.trim();
    const result = document.getElementById('result');
    const parts = ip.split('.');

    if (parts.length !== 4) {
        result.textContent = "Invalid IP: Must contain exactly 4 octets.";
        result.style.color = " #E0FFFF";
        return;
    }

    for (let part of parts) {
        const octet = parseInt(part);
        if (isNaN(octet) || octet < 0 || octet > 255) {
            result.textContent = "Invalid IP: Each octet must be a number between 0 and 255.";
            result.style.color = " #E0FFFF";
            return;
        }
    }

    const first = parseInt(parts[0]);

    if (first === 0 || first === 127) {
        result.textContent = "Reserved IP Address!";
        result.style.color = "orange";
    } else if (first >= 1 && first <= 126) {
        result.textContent = "Valid IP Address (Class A)";
        result.style.color = " #E0FFFF";
    } else if (first >= 128 && first <= 191) {
        result.textContent = "Valid IP Address (Class B)";
        result.style.color = " #E0FFFF";
    } else if (first >= 192 && first <= 223) {
        result.textContent = "Valid IP Address (Class C)";
        result.style.color = " #E0FFFF";
    } else if (first >= 224 && first <= 239) {
        result.textContent = "Valid IP Address (Class D)";
        result.style.color = " #E0FFFF";
    } else if (first >= 240 && first <= 255) {
        result.textContent = "Valid IP Address (Class E)";
        result.style.color = " #E0FFFF";
    }

}