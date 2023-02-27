var values = [];
var checkboxes = document.querySelectorAll(".checkbox");

for (var checkbox of checkboxes) {
  checkbox.addEventListener("click", function () {
    if (this.checked == true) {
      values.push(this.value);
      document.getElementById("getVal").innerHTML = values.toString();
    } else {
      values = values.filter((e) => e !== this.value);
      document.getElementById("getVal").innerHTML = values.toString();
    }
  });

  function sendContact() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var interested = document.getElementById("getVal").value;

    Email.send({
      SecureToken: "f2a2a49c-5138-46a4-9ba5-0618eb3deaa8",
      To: "dinotechitsolution@gmail.com",
      From: "dinotechitsolution@gmail.com",
      Subject: "Client Update!",
      Body:
        `<style>
    body {
        margin: 0;
        padding: 0;
        mso-line-height-rule: exactly;
        min-width: 100%;
    }
.wrapper {
    display: table;
    table-layout: fixed;
    width: 100%;
    min-width: 620px;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
}

body, .wrapper {
    background-color: #ffffff;
}

/* Basic */
table {
    border-collapse: collapse;
    border-spacing: 0;
}
table.center {
    margin: 0 auto;
    width: 602px;
}
td {
    padding: 0;
    vertical-align: top;
}

.spacer,
.border {
    font-size: 1px;
    line-height: 1px;
}
.spacer {
    width: 100%;
    line-height: 16px
}
.border {
    background-color: #e0e0e0;
    width: 1px;
}

.padded {
    padding: 0 24px;
}
img {
    border: 0;
    -ms-interpolation-mode: bicubic;
}
.image {
    font-size: 12px;
}
.image img {
    display: block;
}
strong, .strong {
    font-weight: 700;
}
h1,
h2,
h3,
p,
ol,
ul,
li {
    margin-top: 0;
}
ol,
ul,
li {
    padding-left: 0;
}

a {
    text-decoration: none;
    color: #616161;
}
.btn {
    background-color:#2196F3;
    border:1px solid #2196F3;
    border-radius:2px;
    color:#ffffff;
    display:inline-block;
    font-family:Roboto, Helvetica, sans-serif;
    font-size:14px;
    font-weight:400;
    line-height:36px;
    text-align:center;
    text-decoration:none;
    text-transform:uppercase;
    width:200px;
    height: 36px;
    padding: 0 8px;
    margin: 0;
    outline: 0;
    outline-offset: 0;
    -webkit-text-size-adjust:none;
    mso-hide:all;
}

/* Top panel */
.title {
    text-align: left;
}

.subject {
    text-align: right;
}

.title, .subject {
    width: 300px;
    padding: 8px 0;
    color: #616161;
    font-family: Roboto, Helvetica, sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
}

/* Header */
.logo {
    padding: 16px 0;
}

/* Logo */
.logo-image {

}

/* Main */
.main {
    -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.24);
    -moz-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.24);
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.24);
}

/* Content */
.columns {
    margin: 0 auto;
    width: 600px;
    background-color: #ffffff;
    font-size: 14px;
}

.column {
    text-align: left;
    background-color: #ffffff;
    font-size: 14px;
}

.column-top {
    font-size: 24px;
    line-height: 24px;
}

.content {
    width: 100%;
}

.column-bottom {
    font-size: 8px;
    line-height: 8px;
}

.content h1 {
    margin-top: 0;
    margin-bottom: 16px;
    color: #212121;
    font-family: Roboto, Helvetica, sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
}

.content p {
    margin-top: 0;
    margin-bottom: 16px;
    color: #212121;
    font-family: Roboto, Helvetica, sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
}
.content .caption {
    color: #616161;
    font-size: 12px;
    line-height: 20px;
}

/* Footer */
.signature, .subscription {
    vertical-align: bottom;
    width: 300px;
    padding-top: 8px;
    margin-bottom: 16px;
}

.signature {
    text-align: left;
}
.subscription {
    text-align: right;
}

.signature p, .subscription p {
    margin-top: 0;
    margin-bottom: 8px;
    color: #616161;
    font-family: Roboto, Helvetica, sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
}

@media only screen and (min-width: 0) {
    .wrapper {
        text-rendering: optimizeLegibility;
    }
}
@media only screen and (max-width: 620px) {
    [class=wrapper] {
        min-width: 302px !important;
        width: 100% !important;
    }
    [class=wrapper] .block {
        display: block !important;
    }
    [class=wrapper] .hide {
        display: none !important;
    }

    [class=wrapper] .top-panel,
    [class=wrapper] .header,
    [class=wrapper] .main,
    [class=wrapper] .footer {
        width: 302px !important;
    }

    [class=wrapper] .title,
    [class=wrapper] .subject,
    [class=wrapper] .signature,
    [class=wrapper] .subscription {
        display: block;
        float: left;
        width: 300px !important;
        text-align: center !important;
    }
    [class=wrapper] .signature {
        padding-bottom: 0 !important;
    }
    [class=wrapper] .subscription {
        padding-top: 0 !important;
    }
}</style>
<center class="wrapper">
    <table class="top-panel center" width="602" border="0" cellspacing="0" cellpadding="0">
        <tbody>
        <tr>
            <td class="title" width="300">Dino Tech</td>
            <td class="subject" width="300"><a class="strong" href="#" target="_blank">www.Dino-Tech.com</a></td>
        </tr>
        <tr>
            <td class="border" colspan="2">&nbsp;</td>
        </tr>
        </tbody>
    </table>

    <div class="spacer">&nbsp;</div>

    <table class="main center" width="602" border="0" cellspacing="0" cellpadding="0">
        <tbody>
        <tr>
            <td class="column">
                <div class="column-top">&nbsp;</div>
                <table class="content" border="0" cellspacing="0" cellpadding="0">
                    <tbody>
                    <tr>
                        <td class="padded">
                          <h1>Dino Tech Client</h1>
                 
                          
                          <p>Content:</p>
                          <table style="width:100%">
                          <tr>
                            <td><strong>Interested</strong></td>
                            <td>` +
        interested +
        `</td>
                          </tr>
                          <tr>
                            <td><strong>Name</strong></td>
                            <td>` +
        name +
        `</td>
                          </tr>
                          <tr>
                            <td><strong>Email<strong></td>
                            <td>` +
        email +
        `</td>
                          </tr>
                          <tr>
                            <td><strong>Message</strong></td>
                            <td></td>
                          </tr>
                        </table><br>
                          <p class="caption">` +
        message +
        `</p>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div class="column-bottom">&nbsp;</div>
            </td>
        </tr>
        </tbody>
    </table>

    <div class="spacer">&nbsp;</div>

    <table class="footer center" width="602" border="0" cellspacing="0" cellpadding="0">
        <tbody>
        <tr>
            <td class="border" colspan="2">&nbsp;</td>
        </tr>
        <tr>
            <td class="signature" width="300">
                <p>
                    With best regards,<br>
                    Dino Tech IT Solution<br>
                    +63 917 870 0349, Dino Tech<br>
                    </p>
                <p>
                    Support: <a class="strong" href="mailto:#" target="_blank">dinotechitsolution@gmail.com</a>
                </p>
            </td>
            <td class="subscription" width="300">
                <div class="logo-image">
                    <a href="#" target="_blank"><img src="https://i.postimg.cc/d10LnrsS/dino-stand-alone-logo.png" width="70" height="70"></a>
                </div>
                <p>
                    <a class="strong block" href="#" target="_blank">
                        Unsubscribe
                    </a>
                    <span class="hide">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                    <a class="strong block" href="#" target="_blank">
                        Account Settings
                    </a>
                </p>
            </td>
        </tr>
        </tbody>
    </table>
</center>`,
    }).then((message) => alert("Thank you for contacting us! message sent."));
    Email.send({
      SecureToken: "f2a2a49c-5138-46a4-9ba5-0618eb3deaa8",
      To: email,
      From: "dinotechitsolution@gmail.com",
      Subject: "Client Update!",
      Body: `<style type="text/css">  
            @font-face {
            font-family: 'Oxygen';
            font-style: normal;
            font-weight: 300;
            src: local('Oxygen Light'), local('Oxygen-Light'), url(https://fonts.gstatic.com/s/oxygen/v7/AwBqWF2kjhlybWamaKMPcZBw1xU1rKptJj_0jans920.woff2) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2212, U+2215;
          }
            
            @font-face {
            font-family: 'Oxygen';
            font-style: normal;
            font-weight: 400;
            src: local('Oxygen Regular'), local('Oxygen-Regular'), url(https://fonts.gstatic.com/s/oxygen/v7/qBSyz106i5ud7wkBU-FrPevvDin1pK8aKteLpeZ5c0A.woff2) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2212, U+2215;
          }
            
            @font-face {
            font-family: 'Source Sans Pro';
            font-style: normal;
            font-weight: 400;
            src: local('Source Sans Pro Regular'), local('SourceSansPro-Regular'), url(https://fonts.gstatic.com/s/sourcesanspro/v11/ODelI1aHBYDBqgeIAH2zlJbPFduIYtoLzwST68uhz_Y.woff2) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2212, U+2215;
          }
          
            body{
              margin:0;
              padding:0;
            }
          
            img{
              border:0 none;
              height:auto;
              line-height:100%;
              outline:none;
              text-decoration:none;
            }
          
            a img{
              border:0 none;
            }
          
            .imageFix{
              display:block;
            }
          
            table, td{
              border-collapse:collapse;
            }
          
            #bodyTable{
              height:100% !important;
              margin:0;
              padding:0;
              width:100% !important;
            }
          </style>
          <table width="100%" height="750" cellpadding="0" cellspacing="0" border="0" style="background: #fff url(https://external-preview.redd.it/b4Zf7xLQ_eHJIwR-NhKRi4IY14xInYpUU5Q_v05QAXg.jpg?auto=webp&s=beb32801cd8d4d4eb4873e8307ec20ce2adcf0f9) right bottom no-repeat; background-size: cover;color:#121212;padding:0px;margin:0px;width:100%;font-family: 'Source Sans Pro', sans-serif;font-weight: 400;line-height:1.5">
            <tbody>
              <tr>
                <td>
                  <table cellpadding="0" cellspacing="0" border="0" style="padding:0px;margin:0px;width:100%;">
                    <tr><td align="center" colspan="3" style="margin:0px;" height="20">&nbsp;</td></tr>
                    <tr>
                      <td style="padding:0px;margin:0px;">&nbsp;</td>
                      <td align="center" style="background: #ffffff; box-shadow: 0 9px 18px 0 rgba(0,0,0,.3), 0 2px 6px 0 rgba(0,0,0,.3);border-radius: 16px;padding:30px;margin:0px;" width="400">
                        <table cellpadding="0" cellspacing="0" border="0" width="100%">
                          <tbody>
                            <tr>
                              <td align="center">
                                <h4 style="margin: 0; padding: 0 0 20px;color: #DE1A1A;font-size:40px;font-family: 'Oxygen', sans-serif;font-weight: 700;">Thank You!</h4>
                              </td>
                            </tr>
                            <tr>
                              <td align="center">
                                <img src="https://drive.google.com/uc?id=12UQwzIFJDsIR0NkwfSBhIlsWWvkKchCF" style="max-width: 150px; width: 100%;" alt="">
                                <p style="color: #666666;font-size: 16px;margin: 0; padding: 10px 0 10px;">Company would like to wish you a very Happy Holiday season and a peaceful and prosperous New Year.</p>
                              </td>
                            </tr>
                            <tr>
                              <td align="center">
                                <p style="color: #666666; font-size: 16px;margin: 0; padding: 10px 0;">We thank you for your business and we look forward to providing you with continued service in the future.</p>
                              </td>
                            </tr>
                            <tr>
                              <td align="center">
                                <h1 style="font-size: 30px;font-family: 'Oxygen', sans-serif;font-weight: 400;margin:0; padding:20px 0 10px;">Dino Tech</h1>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                      <td style="padding:0px;margin:0px;">&nbsp;</td>
                    </tr>
                    <tr><td colspan="3" style="padding:0px;margin:0px;font-size:20px;height:20px;" height="20">&nbsp;</td></tr>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          `,
    });
  }
}
