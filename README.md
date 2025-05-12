# project_3 : IP Address Validator Tool

A simple and effective tool to validate IPv4 addresses. This project allows users to enter an IP address and checks whether it is valid or not based on standard IPv4 format rules.

## 🔍 Features

- Validates IPv4 addresses (e.g., 192.168.1.1)
- Checks if each segment (octet) is within the valid range (0–255)
- User-friendly input interface
- Instant validation result display

## 🛠️ Technologies Used

- **Frontend**: HTML, CSS
- **Backend/Logic**:  JavaScript (if you want backend logic in java i have also provided it) 

## 🚀 How to Use

1. Clone or download this repository.
2. Open the `ipindex.html` file in a web browser 
3. Enter an IP address in the input field.
4. Click the **submit** button.
5. The tool will display whether the IP is **Valid** or **Invalid**.

## ✅ Example Valid IPs

- `192.168.0.1`
- `8.8.8.8`
- `127.0.0.1`

## ❌ Example Invalid IPs

- `256.100.50.25` *(256 is out of range)*
- `192.168.1` *(only 3 parts)*
- `abc.def.ghi.jkl` *(not numeric)*
