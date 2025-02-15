import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import axios from "axios";

const NewForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleRedirect = () => {
    setIsSubmitting(false);
    setName("");
    setNumber("");
    window.location.href = "/thankyou.html"; // Navigate to thankyou.html
  };
  const emailSend = async () => {
    const serviceId = "service_qu5h6rr";
    const templateId = "template_w7n6s6a";
    const publicKey = "g30AfEaFqUQrebkdO";

    const templateParams = {
      from_name: name,
      from_number: countryCode + number,
      to_name: "K-Nine Realtors",
      from_website: "MICL Jade Park",
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
    } catch (error) {
      console.log("Error sending API request", error);
    }
  };

  const apiTest = async () => {
    const data = {
      CustomerName: name,
      MobileNo: countryCode + number,
      WhatsappNo: countryCode + number,
      receiver_email: "sellxpert@gmail.com",
      source_name: "WEBSITE",
      sub_source_name: "MICL Jade Park",
      project_name: "MICL Jade Park",
    };

    console.log("payload: ", data);

    try {
      const response = await axios.post(
        "https://api.k9realtors.com/api/V1/lead_create",
        data
      );
      console.log(response);
      if (response.status === 200) {
        localStorage.setItem("apiPhone", data.MobileNo);
      }
    } catch (error) {
      console.log("Error sending API request", error);
    }
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    if (localStorage.getItem("apiPhone") === countryCode + number) {
      handleRedirect();
      return;
    }

    await apiTest();
    await emailSend();

    handleRedirect();
    return;
  };
  return (
    <form
      class="form-side mobile-only-form"
      style={{
        // marginTop: "1rem",
        // boxShadow: "0 4px 16px rgba(0, 0, 0, 0.5)",
        backgroundColor: "white",
        marginBlock: ".5rem",
        paddingBlock: ".5rem",
      }}
      id="pardotForm3"
      onSubmit={handlesubmit}
    >
      <span
        className="d-block text-center"
        style={{
          padding: ".75rem",
          backgroundColor: "white",
          fontSize: "1.25rem",
        }}
      >
        Spacious <b style={{ fontSize: "1.3rem" }}> 3, 4 & 5 </b>BHK Homes
        <br />
        Starts at
        <br />
        <b style={{ fontSize: "1.25rem" }}>₹ 4.90 Cr* Onwards</b> Onwards
        <br />
        {/* <br /> */}
        {/* <small>(Largest 2 BHKs in Thane)</small> */}
      </span>

      <div
        className="form-style"
        style={{
          border: "2px solid #dadada",
          padding: "1rem",
          boxShadow: "3px 3px 15px 3px #e3c495",
        }}
      >
        <span
          className="d-block text-center form-heading font-weight-bold my-2"
          style={{
            //   paddingTop: "1rem",
            fontSize: "1.2rem",
            //   textDecoration: "underline",
          }}
        >
          Get The Best Quote
        </span>

        <input
          type="text"
          id="fname2pardotForm3"
          placeholder="Name"
          class="form-control rounded-0 micro-form-field"
          required="true"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <select
          class="my_country_name form-control rounded-0 micro-form-field"
          name="country_name"
          onChange={(e) =>
            setCountryCode(
              "+" + e.target.selectedOptions[0].getAttribute("data_contry_code")
            )
          }
        >
          <option data-countrycode="IN" value="India" data_contry_code="91">
            India (+91)
          </option>
          <option
            data-countrycode="AF"
            value="Afghanistan"
            data_contry_code="93"
          >
            Afghanistan (+93)
          </option>
          <option data-countrycode="AL" value="Albania" data_contry_code="355">
            Albania (+355)
          </option>
          <option data-countrycode="DZ" value="Algeria" data_contry_code="213">
            Algeria (+213)
          </option>
          <option
            data-countrycode="AS"
            value="American Samoa"
            data_contry_code="1-684"
          >
            American Samoa (+1-684)
          </option>
          <option data-countrycode="AD" value="Andorra" data_contry_code="376">
            Andorra (+376)
          </option>
          <option data-countrycode="AO" value="Angola" data_contry_code="244">
            Angola (+244)
          </option>
          <option
            data-countrycode="AI"
            value="Anguilla"
            data_contry_code="1-264"
          >
            Anguilla (+1-264)
          </option>
          <option
            data-countrycode="AQ"
            value="Antarctica"
            data_contry_code="672"
          >
            Antarctica (+672)
          </option>
          <option
            data-countrycode="AG"
            value="Antigua and Barbuda"
            data_contry_code="1-268"
          >
            Antigua and Barbuda (+1-268)
          </option>
          <option data-countrycode="AR" value="Argentina" data_contry_code="54">
            Argentina (+54)
          </option>
          <option data-countrycode="AM" value="Armenia" data_contry_code="374">
            Armenia (+374)
          </option>
          <option data-countrycode="AW" value="Aruba" data_contry_code="297">
            Aruba (+297)
          </option>
          <option data-countrycode="AU" value="Australia" data_contry_code="61">
            Australia (+61)
          </option>
          <option data-countrycode="AT" value="Austria" data_contry_code="43">
            Austria (+43)
          </option>
          <option
            data-countrycode="AZ"
            value="Azerbaijan"
            data_contry_code="994"
          >
            Azerbaijan (+994)
          </option>
          <option
            data-countrycode="BS"
            value="Bahamas"
            data_contry_code="1-242"
          >
            Bahamas (+1-242)
          </option>
          <option data-countrycode="BH" value="Bahrain" data_contry_code="973">
            Bahrain (+973)
          </option>
          <option
            data-countrycode="BD"
            value="Bangladesh"
            data_contry_code="880"
          >
            Bangladesh (+880)
          </option>
          <option
            data-countrycode="BB"
            value="Barbados"
            data_contry_code="1-246"
          >
            Barbados (+1-246)
          </option>
          <option data-countrycode="BY" value="Belarus" data_contry_code="375">
            Belarus (+375)
          </option>
          <option data-countrycode="BE" value="Belgium" data_contry_code="32">
            Belgium (+32)
          </option>
          <option data-countrycode="BZ" value="Belize" data_contry_code="501">
            Belize (+501)
          </option>
          <option data-countrycode="BJ" value="Benin" data_contry_code="229">
            Benin (+229)
          </option>
          <option
            data-countrycode="BM"
            value="Bermuda"
            data_contry_code="1-441"
          >
            Bermuda (+1-441)
          </option>
          <option data-countrycode="BT" value="Bhutan" data_contry_code="975">
            Bhutan (+975)
          </option>
          <option data-countrycode="BO" value="Bolivia" data_contry_code="591">
            Bolivia (+591)
          </option>
          <option
            data-countrycode="BA"
            value="Bosnia and Herzegowina"
            data_contry_code="387"
          >
            Bosnia and Herzegowina (+387)
          </option>
          <option data-countrycode="BW" value="Botswana" data_contry_code="267">
            Botswana (+267)
          </option>
          <option
            data-countrycode="BV"
            value="Bouvet Island"
            data_contry_code="47"
          >
            Bouvet Island (+47)
          </option>
          <option data-countrycode="BR" value="Brazil" data_contry_code="55">
            Brazil (+55)
          </option>
          <option
            data-countrycode="IO"
            value="British Indian Ocean Territory"
            data_contry_code="246"
          >
            British Indian Ocean Territory (+246)
          </option>
          <option
            data-countrycode="BN"
            value="Brunei Darussalam"
            data_contry_code="673"
          >
            Brunei Darussalam (+673)
          </option>
          <option data-countrycode="BG" value="Bulgaria" data_contry_code="359">
            Bulgaria (+359)
          </option>
          <option
            data-countrycode="BF"
            value="Burkina Faso"
            data_contry_code="226"
          >
            Burkina Faso (+226)
          </option>
          <option data-countrycode="BI" value="Burundi" data_contry_code="257">
            Burundi (+257)
          </option>
          <option data-countrycode="KH" value="Cambodia" data_contry_code="855">
            Cambodia (+855)
          </option>
          <option data-countrycode="CM" value="Cameroon" data_contry_code="237">
            Cameroon (+237)
          </option>
          <option data-countrycode="CA" value="Canada" data_contry_code="1">
            Canada (+1)
          </option>
          <option
            data-countrycode="CV"
            value="Cape Verde"
            data_contry_code="238"
          >
            Cape Verde (+238)
          </option>
          <option
            data-countrycode="KY"
            value="Cayman Islands"
            data_contry_code="1-345"
          >
            Cayman Islands (+1-345)
          </option>
          <option
            data-countrycode="CF"
            value="Central African Republic"
            data_contry_code="236"
          >
            Central African Republic (+236)
          </option>
          <option data-countrycode="TD" value="Chad" data_contry_code="235">
            Chad (+235)
          </option>
          <option data-countrycode="CL" value="Chile" data_contry_code="56">
            Chile (+56)
          </option>
          <option data-countrycode="CN" value="China" data_contry_code="86">
            China (+86)
          </option>
          <option
            data-countrycode="CX"
            value="Christmas Island"
            data_contry_code="61"
          >
            Christmas Island (+61)
          </option>
          <option
            data-countrycode="CC"
            value="Cocos (Keeling) Islands"
            data_contry_code="61"
          >
            Cocos (Keeling) Islands (+61)
          </option>
          <option data-countrycode="CO" value="Colombia" data_contry_code="57">
            Colombia (+57)
          </option>
          <option data-countrycode="KM" value="Comoros" data_contry_code="269">
            Comoros (+269)
          </option>
          <option
            data-countrycode="CG"
            value="Congo Democratic Republic of"
            data_contry_code="242"
          >
            Congo Democratic Republic of (+242)
          </option>
          <option
            data-countrycode="CK"
            value="Cook Islands"
            data_contry_code="682"
          >
            Cook Islands (+682)
          </option>
          <option
            data-countrycode="CR"
            value="Costa Rica"
            data_contry_code="506"
          >
            Costa Rica (+506)
          </option>
          <option
            data-countrycode="CI"
            value="Cote D'Ivoire"
            data_contry_code="225"
          >
            Cote D'Ivoire (+225)
          </option>
          <option data-countrycode="HR" value="Croatia" data_contry_code="385">
            Croatia (+385)
          </option>
          <option data-countrycode="CU" value="Cuba" data_contry_code="53">
            Cuba (+53)
          </option>
          <option data-countrycode="CY" value="Cyprus" data_contry_code="357">
            Cyprus (+357)
          </option>
          <option
            data-countrycode="CZ"
            value="Czech Republic"
            data_contry_code="420"
          >
            Czech Republic (+420)
          </option>
          <option data-countrycode="DK" value="Denmark" data_contry_code="45">
            Denmark (+45)
          </option>
          <option data-countrycode="DJ" value="Djibouti" data_contry_code="253">
            Djibouti (+253)
          </option>
          <option
            data-countrycode="DM"
            value="Dominica"
            data_contry_code="1-767"
          >
            Dominica (+1-767)
          </option>
          <option
            data-countrycode="DO"
            value="Dominican Republic"
            data_contry_code="1-809"
          >
            Dominican Republic (+1-809)
          </option>
          <option
            data-countrycode="TL"
            value="Timor-Leste"
            data_contry_code="670"
          >
            Timor-Leste (+670)
          </option>
          <option data-countrycode="EC" value="Ecuador" data_contry_code="593">
            Ecuador (+593)
          </option>
          <option data-countrycode="EG" value="Egypt" data_contry_code="20">
            Egypt (+20)
          </option>
          <option
            data-countrycode="SV"
            value="El Salvador"
            data_contry_code="503"
          >
            El Salvador (+503)
          </option>
          <option
            data-countrycode="GQ"
            value="Equatorial Guinea"
            data_contry_code="240"
          >
            Equatorial Guinea (+240)
          </option>
          <option data-countrycode="ER" value="Eritrea" data_contry_code="291">
            Eritrea (+291)
          </option>
          <option data-countrycode="EE" value="Estonia" data_contry_code="372">
            Estonia (+372)
          </option>
          <option data-countrycode="ET" value="Ethiopia" data_contry_code="251">
            Ethiopia (+251)
          </option>
          <option
            data-countrycode="FK"
            value="Falkland Islands (Malvinas)"
            data_contry_code="500"
          >
            Falkland Islands (Malvinas) (+500)
          </option>
          <option
            data-countrycode="FO"
            value="Faroe Islands"
            data_contry_code="298"
          >
            Faroe Islands (+298)
          </option>
          <option data-countrycode="FJ" value="Fiji" data_contry_code="679">
            Fiji (+679)
          </option>
          <option data-countrycode="FI" value="Finland" data_contry_code="358">
            Finland (+358)
          </option>
          <option data-countrycode="FR" value="France" data_contry_code="33">
            France (+33)
          </option>
          <option
            data-countrycode="GF"
            value="French Guiana"
            data_contry_code="594"
          >
            French Guiana (+594)
          </option>
          <option
            data-countrycode="PF"
            value="French Polynesia"
            data_contry_code="689"
          >
            French Polynesia (+689)
          </option>
          <option data-countrycode="GA" value="Gabon" data_contry_code="241">
            Gabon (+241)
          </option>
          <option data-countrycode="GM" value="Gambia" data_contry_code="220">
            Gambia (+220)
          </option>
          <option data-countrycode="GE" value="Georgia" data_contry_code="995">
            Georgia (+995)
          </option>
          <option data-countrycode="DE" value="Germany" data_contry_code="49">
            Germany (+49)
          </option>
          <option data-countrycode="GH" value="Ghana" data_contry_code="233">
            Ghana (+233)
          </option>
          <option
            data-countrycode="GI"
            value="Gibraltar"
            data_contry_code="350"
          >
            Gibraltar (+350)
          </option>
          <option data-countrycode="GR" value="Greece" data_contry_code="30">
            Greece (+30)
          </option>
          <option
            data-countrycode="GL"
            value="Greenland"
            data_contry_code="299"
          >
            Greenland (+299)
          </option>
          <option
            data-countrycode="GD"
            value="Grenada"
            data_contry_code="1-473"
          >
            Grenada (+1-473)
          </option>
          <option
            data-countrycode="GP"
            value="Guadeloupe"
            data_contry_code="590"
          >
            Guadeloupe (+590)
          </option>
          <option data-countrycode="GU" value="Guam" data_contry_code="1-671">
            Guam (+1-671)
          </option>
          <option
            data-countrycode="GT"
            value="Guatemala"
            data_contry_code="502"
          >
            Guatemala (+502)
          </option>
          <option data-countrycode="GN" value="Guinea" data_contry_code="224">
            Guinea (+224)
          </option>
          <option
            data-countrycode="GW"
            value="Guinea-bissau"
            data_contry_code="245"
          >
            Guinea-bissau (+245)
          </option>
          <option data-countrycode="GY" value="Guyana" data_contry_code="592">
            Guyana (+592)
          </option>
          <option data-countrycode="HT" value="Haiti" data_contry_code="509">
            Haiti (+509)
          </option>
          <option
            data-countrycode="HM"
            value="Heard Island and McDonald Islands"
            data_contry_code="011"
          >
            Heard Island and McDonald Islands (+011)
          </option>
          <option data-countrycode="HN" value="Honduras" data_contry_code="504">
            Honduras (+504)
          </option>
          <option
            data-countrycode="HK"
            value="Hong Kong"
            data_contry_code="852"
          >
            Hong Kong (+852)
          </option>
          <option data-countrycode="HU" value="Hungary" data_contry_code="36">
            Hungary (+36)
          </option>
          <option data-countrycode="IS" value="Iceland" data_contry_code="354">
            Iceland (+354)
          </option>
          <option
            data-countrycode="IN"
            value="India"
            data_contry_code="91"
            selected=""
          >
            India (+91)
          </option>
          <option data-countrycode="ID" value="Indonesia" data_contry_code="62">
            Indonesia (+62)
          </option>
          <option
            data-countrycode="IR"
            value="Iran (Islamic Republic of)"
            data_contry_code="98"
          >
            Iran (Islamic Republic of) (+98)
          </option>
          <option data-countrycode="IQ" value="Iraq" data_contry_code="964">
            Iraq (+964)
          </option>
          <option data-countrycode="IE" value="Ireland" data_contry_code="353">
            Ireland (+353)
          </option>
          <option data-countrycode="IL" value="Israel" data_contry_code="972">
            Israel (+972)
          </option>
          <option data-countrycode="IT" value="Italy" data_contry_code="39">
            Italy (+39)
          </option>
          <option
            data-countrycode="JM"
            value="Jamaica"
            data_contry_code="1-876"
          >
            Jamaica (+1-876)
          </option>
          <option data-countrycode="JP" value="Japan" data_contry_code="81">
            Japan (+81)
          </option>
          <option data-countrycode="JO" value="Jordan" data_contry_code="962">
            Jordan (+962)
          </option>
          <option data-countrycode="KZ" value="Kazakhstan" data_contry_code="7">
            Kazakhstan (+7)
          </option>
          <option data-countrycode="KE" value="Kenya" data_contry_code="254">
            Kenya (+254)
          </option>
          <option data-countrycode="KI" value="Kiribati" data_contry_code="686">
            Kiribati (+686)
          </option>
          <option
            data-countrycode="KP"
            value="Korea, Democratic People's Republic of"
            data_contry_code="850"
          >
            Korea, Democratic People's Republic of (+850)
          </option>
          <option
            data-countrycode="KR"
            value="South Korea"
            data_contry_code="82"
          >
            South Korea (+82)
          </option>
          <option data-countrycode="KW" value="Kuwait" data_contry_code="965">
            Kuwait (+965)
          </option>
          <option
            data-countrycode="KG"
            value="Kyrgyzstan"
            data_contry_code="996"
          >
            Kyrgyzstan (+996)
          </option>
          <option
            data-countrycode="LA"
            value="Lao People's Democratic Republic"
            data_contry_code="856"
          >
            Lao People's Democratic Republic (+856)
          </option>
          <option data-countrycode="LV" value="Latvia" data_contry_code="371">
            Latvia (+371)
          </option>
          <option data-countrycode="LB" value="Lebanon" data_contry_code="961">
            Lebanon (+961)
          </option>
          <option data-countrycode="LS" value="Lesotho" data_contry_code="266">
            Lesotho (+266)
          </option>
          <option data-countrycode="LR" value="Liberia" data_contry_code="231">
            Liberia (+231)
          </option>
          <option data-countrycode="LY" value="Libya" data_contry_code="218">
            Libya (+218)
          </option>
          <option
            data-countrycode="LI"
            value="Liechtenstein"
            data_contry_code="423"
          >
            Liechtenstein (+423)
          </option>
          <option
            data-countrycode="LT"
            value="Lithuania"
            data_contry_code="370"
          >
            Lithuania (+370)
          </option>
          <option
            data-countrycode="LU"
            value="Luxembourg"
            data_contry_code="352"
          >
            Luxembourg (+352)
          </option>
          <option data-countrycode="MO" value="Macao" data_contry_code="853">
            Macao (+853)
          </option>
          <option
            data-countrycode="MK"
            value="Macedonia, The Former Yugoslav Republic of"
            data_contry_code="389"
          >
            Macedonia, The Former Yugoslav Republic of (+389)
          </option>
          <option
            data-countrycode="MG"
            value="Madagascar"
            data_contry_code="261"
          >
            Madagascar (+261)
          </option>
          <option data-countrycode="MW" value="Malawi" data_contry_code="265">
            Malawi (+265)
          </option>
          <option data-countrycode="MY" value="Malaysia" data_contry_code="60">
            Malaysia (+60)
          </option>
          <option data-countrycode="MV" value="Maldives" data_contry_code="960">
            Maldives (+960)
          </option>
          <option data-countrycode="ML" value="Mali" data_contry_code="223">
            Mali (+223)
          </option>
          <option data-countrycode="MT" value="Malta" data_contry_code="356">
            Malta (+356)
          </option>
          <option
            data-countrycode="MH"
            value="Marshall Islands"
            data_contry_code="692"
          >
            Marshall Islands (+692)
          </option>
          <option
            data-countrycode="MQ"
            value="Martinique"
            data_contry_code="596"
          >
            Martinique (+596)
          </option>
          <option
            data-countrycode="MR"
            value="Mauritania"
            data_contry_code="222"
          >
            Mauritania (+222)
          </option>
          <option
            data-countrycode="MU"
            value="Mauritius"
            data_contry_code="230"
          >
            Mauritius (+230)
          </option>
          <option data-countrycode="YT" value="Mayotte" data_contry_code="262">
            Mayotte (+262)
          </option>
          <option data-countrycode="MX" value="Mexico" data_contry_code="52">
            Mexico (+52)
          </option>
          <option
            data-countrycode="FM"
            value="Micronesia, Federated States of"
            data_contry_code="691"
          >
            Micronesia, Federated States of (+691)
          </option>
          <option data-countrycode="MD" value="Moldova" data_contry_code="373">
            Moldova (+373)
          </option>
          <option data-countrycode="MC" value="Monaco" data_contry_code="377">
            Monaco (+377)
          </option>
          <option data-countrycode="MN" value="Mongolia" data_contry_code="976">
            Mongolia (+976)
          </option>
          <option
            data-countrycode="MS"
            value="Montserrat"
            data_contry_code="1-664"
          >
            Montserrat (+1-664)
          </option>
          <option data-countrycode="MA" value="Morocco" data_contry_code="212">
            Morocco (+212)
          </option>
          <option
            data-countrycode="MZ"
            value="Mozambique"
            data_contry_code="258"
          >
            Mozambique (+258)
          </option>
          <option data-countrycode="MM" value="Myanmar" data_contry_code="95">
            Myanmar (+95)
          </option>
          <option data-countrycode="NA" value="Namibia" data_contry_code="264">
            Namibia (+264)
          </option>
          <option data-countrycode="NR" value="Nauru" data_contry_code="674">
            Nauru (+674)
          </option>
          <option data-countrycode="NP" value="Nepal" data_contry_code="977">
            Nepal (+977)
          </option>
          <option
            data-countrycode="NL"
            value="Netherlands"
            data_contry_code="31"
          >
            Netherlands (+31)
          </option>
          <option
            data-countrycode="AN"
            value="Netherlands Antilles"
            data_contry_code="599"
          >
            Netherlands Antilles (+599)
          </option>
          <option
            data-countrycode="NC"
            value="New Caledonia"
            data_contry_code="687"
          >
            New Caledonia (+687 )
          </option>
          <option
            data-countrycode="NZ"
            value="New Zealand"
            data_contry_code="64"
          >
            New Zealand (+64)
          </option>
          <option
            data-countrycode="NI"
            value="Nicaragua"
            data_contry_code="505"
          >
            Nicaragua (+505)
          </option>
          <option data-countrycode="NE" value="Niger" data_contry_code="227">
            Niger (+227)
          </option>
          <option data-countrycode="NG" value="Nigeria" data_contry_code="234">
            Nigeria (+234)
          </option>
          <option data-countrycode="NU" value="Niue" data_contry_code="683">
            Niue (+683)
          </option>
          <option
            data-countrycode="NF"
            value="Norfolk Island"
            data_contry_code="672"
          >
            Norfolk Island (+672)
          </option>
          <option
            data-countrycode="MP"
            value="Northern Mariana Islands"
            data_contry_code="1-670"
          >
            Northern Mariana Islands (+1-670)
          </option>
          <option data-countrycode="NO" value="Norway" data_contry_code="47">
            Norway (+47)
          </option>
          <option data-countrycode="OM" value="Oman" data_contry_code="968">
            Oman (+968)
          </option>
          <option data-countrycode="PK" value="Pakistan" data_contry_code="92">
            Pakistan (+92)
          </option>
          <option data-countrycode="PW" value="Palau" data_contry_code="680">
            Palau (+680)
          </option>
          <option data-countrycode="PA" value="Panama" data_contry_code="507">
            Panama (+507)
          </option>
          <option
            data-countrycode="PG"
            value="Papua New Guinea"
            data_contry_code="675"
          >
            Papua New Guinea (+675)
          </option>
          <option data-countrycode="PY" value="Paraguay" data_contry_code="595">
            Paraguay (+595)
          </option>
          <option data-countrycode="PE" value="Peru" data_contry_code="51">
            Peru (+51)
          </option>
          <option
            data-countrycode="PH"
            value="Philippines"
            data_contry_code="63"
          >
            Philippines (+63)
          </option>
          <option data-countrycode="PN" value="Pitcairn" data_contry_code="64">
            Pitcairn (+64)
          </option>
          <option data-countrycode="PL" value="Poland" data_contry_code="48">
            Poland (+48)
          </option>
          <option data-countrycode="PT" value="Portugal" data_contry_code="351">
            Portugal (+351)
          </option>
          <option
            data-countrycode="PR"
            value="Puerto Rico"
            data_contry_code="1-787"
          >
            Puerto Rico (+1-787)
          </option>
          <option data-countrycode="QA" value="Qatar" data_contry_code="974">
            Qatar (+974)
          </option>
          <option data-countrycode="RE" value="Reunion" data_contry_code="262">
            Reunion (+262)
          </option>
          <option data-countrycode="RO" value="Romania" data_contry_code="40">
            Romania (+40)
          </option>
          <option
            data-countrycode="RU"
            value="Russian Federation"
            data_contry_code="7"
          >
            Russian Federation (+7)
          </option>
          <option data-countrycode="RW" value="Rwanda" data_contry_code="250">
            Rwanda (+250)
          </option>
          <option
            data-countrycode="KN"
            value="Saint Kitts and Nevis"
            data_contry_code="1-869"
          >
            Saint Kitts and Nevis (+1-869)
          </option>
          <option
            data-countrycode="LC"
            value="Saint Lucia"
            data_contry_code="1-758"
          >
            Saint Lucia (+1-758)
          </option>
          <option
            data-countrycode="VC"
            value="Saint Vincent and the Grenadines"
            data_contry_code="1-784"
          >
            Saint Vincent and the Grenadines (+1-784)
          </option>
          <option data-countrycode="WS" value="Samoa" data_contry_code="685">
            Samoa (+685)
          </option>
          <option
            data-countrycode="SM"
            value="San Marino"
            data_contry_code="378"
          >
            San Marino (+378)
          </option>
          <option
            data-countrycode="ST"
            value="Sao Tome and Principe"
            data_contry_code="239"
          >
            Sao Tome and Principe (+239)
          </option>
          <option
            data-countrycode="SA"
            value="Saudi Arabia"
            data_contry_code="966"
          >
            Saudi Arabia (+966)
          </option>
          <option data-countrycode="SN" value="Senegal" data_contry_code="221">
            Senegal (+221)
          </option>
          <option
            data-countrycode="SC"
            value="Seychelles"
            data_contry_code="248"
          >
            Seychelles (+248)
          </option>
          <option
            data-countrycode="SL"
            value="Sierra Leone"
            data_contry_code="232"
          >
            Sierra Leone (+232)
          </option>
          <option data-countrycode="SG" value="Singapore" data_contry_code="65">
            Singapore (+65)
          </option>
          <option
            data-countrycode="SK"
            value="Slovakia (Slovak Republic)"
            data_contry_code="421"
          >
            Slovakia (Slovak Republic) (+421)
          </option>
          <option data-countrycode="SI" value="Slovenia" data_contry_code="386">
            Slovenia (+386)
          </option>
          <option
            data-countrycode="SB"
            value="Solomon Islands"
            data_contry_code="677"
          >
            Solomon Islands (+677)
          </option>
          <option data-countrycode="SO" value="Somalia" data_contry_code="252">
            Somalia (+252)
          </option>
          <option
            data-countrycode="ZA"
            value="South Africa"
            data_contry_code="27"
          >
            South Africa (+27)
          </option>
          <option
            data-countrycode="GS"
            value="South Georgia and the South Sandwich Islands"
            data_contry_code="500"
          >
            South Georgia and the South Sandwich Islands (+500)
          </option>
          <option data-countrycode="ES" value="Spain" data_contry_code="34">
            Spain (+34)
          </option>
          <option data-countrycode="LK" value="Sri Lanka" data_contry_code="94">
            Sri Lanka (+94)
          </option>
          <option
            data-countrycode="SH"
            value="Saint Helena, Ascension and Tristan da Cunha"
            data_contry_code="290"
          >
            Saint Helena, Ascension and Tristan da Cunha (+290)
          </option>
          <option
            data-countrycode="PM"
            value="St. Pierre and Miquelon"
            data_contry_code="508"
          >
            St. Pierre and Miquelon (+508)
          </option>
          <option data-countrycode="SD" value="Sudan" data_contry_code="249">
            Sudan (+249)
          </option>
          <option data-countrycode="SR" value="Suriname" data_contry_code="597">
            Suriname (+597)
          </option>
          <option
            data-countrycode="SJ"
            value="Svalbard and Jan Mayen Islands"
            data_contry_code="47"
          >
            Svalbard and Jan Mayen Islands (+47)
          </option>
          <option
            data-countrycode="SZ"
            value="Swaziland"
            data_contry_code="268"
          >
            Swaziland (+268)
          </option>
          <option data-countrycode="SE" value="Sweden" data_contry_code="46">
            Sweden (+46)
          </option>
          <option
            data-countrycode="CH"
            value="Switzerland"
            data_contry_code="41"
          >
            Switzerland (+41)
          </option>
          <option
            data-countrycode="SY"
            value="Syrian Arab Republic"
            data_contry_code="963"
          >
            Syrian Arab Republic (+963)
          </option>
          <option data-countrycode="TW" value="Taiwan" data_contry_code="886">
            Taiwan (+886)
          </option>
          <option
            data-countrycode="TJ"
            value="Tajikistan"
            data_contry_code="992"
          >
            Tajikistan (+992)
          </option>
          <option
            data-countrycode="TZ"
            value="Tanzania, United Republic of"
            data_contry_code="255"
          >
            Tanzania, United Republic of (+255)
          </option>
          <option data-countrycode="TH" value="Thailand" data_contry_code="66">
            Thailand (+66)
          </option>
          <option data-countrycode="TG" value="Togo" data_contry_code="228">
            Togo (+228)
          </option>
          <option data-countrycode="TK" value="Tokelau" data_contry_code="690">
            Tokelau (+690)
          </option>
          <option data-countrycode="TO" value="Tonga" data_contry_code="676">
            Tonga (+676)
          </option>
          <option
            data-countrycode="TT"
            value="Trinidad and Tobago"
            data_contry_code="1-868"
          >
            Trinidad and Tobago (+1-868)
          </option>
          <option data-countrycode="TN" value="Tunisia" data_contry_code="216">
            Tunisia (+216)
          </option>
          <option data-countrycode="TR" value="Turkey" data_contry_code="90">
            Turkey (+90)
          </option>
          <option
            data-countrycode="TM"
            value="Turkmenistan"
            data_contry_code="993"
          >
            Turkmenistan (+993)
          </option>
          <option
            data-countrycode="TC"
            value="Turks and Caicos Islands"
            data_contry_code="1-649"
          >
            Turks and Caicos Islands (+1-649)
          </option>
          <option data-countrycode="TV" value="Tuvalu" data_contry_code="688">
            Tuvalu (+688)
          </option>
          <option data-countrycode="UG" value="Uganda" data_contry_code="256">
            Uganda (+256)
          </option>
          <option data-countrycode="UA" value="Ukraine" data_contry_code="380">
            Ukraine (+380)
          </option>
          <option
            data-countrycode="AE"
            value="United Arab Emirates"
            data_contry_code="971"
          >
            United Arab Emirates (+971)
          </option>
          <option
            data-countrycode="GB"
            value="United Kingdom"
            data_contry_code="44"
          >
            United Kingdom (+44)
          </option>
          <option
            data-countrycode="US"
            value="United States"
            data_contry_code="1"
          >
            United States (+1)
          </option>
          <option
            data-countrycode="UM"
            value="United States Minor Outlying Islands"
            data_contry_code="246"
          >
            United States Minor Outlying Islands (+246)
          </option>
          <option data-countrycode="UY" value="Uruguay" data_contry_code="598">
            Uruguay (+598)
          </option>
          <option
            data-countrycode="UZ"
            value="Uzbekistan"
            data_contry_code="998"
          >
            Uzbekistan (+998)
          </option>
          <option data-countrycode="VU" value="Vanuatu" data_contry_code="678">
            Vanuatu (+678)
          </option>
          <option
            data-countrycode="VA"
            value="Vatican City State (Holy See)"
            data_contry_code="379"
          >
            Vatican City State (Holy See) (+379)
          </option>
          <option data-countrycode="VE" value="Venezuela" data_contry_code="58">
            Venezuela (+58)
          </option>
          <option data-countrycode="VN" value="Vietnam" data_contry_code="84">
            Vietnam (+84)
          </option>
          <option
            data-countrycode="VG"
            value="Virgin Islands (British)"
            data_contry_code="1-284"
          >
            Virgin Islands (British) (+1-284)
          </option>
          <option
            data-countrycode="VI"
            value="Virgin Islands (U.S.)"
            data_contry_code="1-340"
          >
            Virgin Islands (U.S.) (+1-340)
          </option>
          <option
            data-countrycode="WF"
            value="Wallis and Futuna Islands"
            data_contry_code="681"
          >
            Wallis and Futuna Islands (+681)
          </option>
          <option
            data-countrycode="EH"
            value="Western Sahara"
            data_contry_code="212"
          >
            Western Sahara (+212)
          </option>
          <option data-countrycode="YE" value="Yemen" data_contry_code="967">
            Yemen (+967)
          </option>
          <option data-countrycode="RS" value="Serbia" data_contry_code="381">
            Serbia (+381)
          </option>
          <option data-countrycode="ZM" value="Zambia" data_contry_code="260">
            Zambia (+260)
          </option>
          <option data-countrycode="ZW" value="Zimbabwe" data_contry_code="263">
            Zimbabwe (+263)
          </option>
          <option
            data-countrycode="AX"
            value="Aaland Islands"
            data_contry_code="358"
          >
            Aaland Islands (+358)
          </option>
          <option
            data-countrycode="PS"
            value="Palestine"
            data_contry_code="970"
          >
            Palestine (+970)
          </option>
          <option
            data-countrycode="ME"
            value="Montenegro"
            data_contry_code="382"
          >
            Montenegro (+382)
          </option>
          <option
            data-countrycode="GG"
            value="Guernsey"
            data_contry_code="44-1481"
          >
            Guernsey (+44-1481)
          </option>
          <option
            data-countrycode="IM"
            value="Isle of Man"
            data_contry_code="44-1624"
          >
            Isle of Man (+44-1624)
          </option>
          <option
            data-countrycode="JE"
            value="Jersey"
            data_contry_code="44-1534"
          >
            Jersey (+44-1534)
          </option>
          <option data-countrycode="CW" value="CuraÃ§ao" data_contry_code="599">
            CuraÃ§ao (+599)
          </option>
          <option
            data-countrycode="CI"
            value="Ivory Coast"
            data_contry_code="225"
          >
            Ivory Coast (+225)
          </option>
          <option data-countrycode="XK" value="Kosovo" data_contry_code="383">
            Kosovo (+383)
          </option>
        </select>
        <input
          name="modal_my_mobile2"
          class="form-control numeric rounded-0 micro-form-field"
          id="modal_my_mobile22pardotForm3"
          placeholder="Phone number"
          type="text"
          required="true"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <p class="formp">
          I consent to the use of my provided data in accordance with the
          privacy policy.
        </p>

        <span
          class="d-block text-center font-weight-bold"
          style={{ textAlign: "center" }}
        >
          {" "}
          Avail 20 x 5 Payment Plan
        </span>

        <button
          type="submit"
          class="btn btn-info micro-form-btn effetMoveGradient submitBtn"
          id="submitBtn"
          disabled={isSubmitting}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default NewForm;
