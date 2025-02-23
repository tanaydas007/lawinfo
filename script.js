
document.getElementById("lawForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Form ko submit hone se roke

    let name = document.getElementById("name").value;
    let mobile = document.getElementById("mobile").value;
    let problem = document.getElementById("problem").value;

    if (name && mobile && problem) {
        // ✅ Green Popup Show karna
        document.getElementById("popupMessage").style.display = "block";

        // ✅ WhatsApp message create karna
        let whatsappMessage = `🚨 *नया फॉर्म सबमिशन* 🚨%0A%0A📌 *नाम:* ${name}%0A📌 *मोबाइल:* ${mobile}%0A📌 *समस्या:* ${problem}`;
        
        // ✅ Aapke WhatsApp number pe message bhejna
        let whatsappNumber = "919064828221"; // 🔴 Aapka WhatsApp number
        let whatsappURL = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${whatsappMessage}`;
        
        // ✅ WhatsApp open karna (Popup band hone ke baad)
        setTimeout(function () {
            window.location.href = whatsappURL;
        }, 3000); // 3 sec delay tak user popup padh sake

        // ✅ Form reset karna
        document.getElementById("lawForm").reset();
    } else {
        alert("कृपया सभी फ़ील्ड भरें!");
    }
});

// ✅ Function to close popup
function closePopup() {
    document.getElementById("popupMessage").style.display = "none";
}



