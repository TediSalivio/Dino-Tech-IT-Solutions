<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <!-- Css Link -->
  <link rel="stylesheet" href="./Css/login.css" />
  <!-- Google font -->
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;900&display=swap" rel="stylesheet" />
  <!-- Bootstrap Link-->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />
  <title>Dino Tech IT Solutions</title>
  <link rel="icon" href="images/Logo-colored-svg.svg" type="image/icon type" />
</head>

<body>
    <div class="login-root">
      <div class="box-root flex-flex flex-direction--column" style="min-height: 100vh;flex-grow: 1;">
        <div class="loginbackground box-background--white padding-top--64">
          <div class="loginbackground-gridContainer">
            <div class="box-root flex-flex" style="grid-area: top / start / 8 / end;">
              <div class="box-root" style="background-image: linear-gradient(#FD8334,#E93F0B 33%); flex-grow: 1;">
              </div>
            </div>
            <div class="box-root flex-flex" style="grid-area: 4 / 2 / auto / 5;">
              <div class="box-root box-divider--light-all-2 animationLeftRight tans3s" style="flex-grow: 1;"></div>
            </div>
            <div class="box-root flex-flex" style="grid-area: 6 / start / auto / 2;">
              <div class="box-root box-background--blue800" style="flex-grow: 1;"></div>
            </div>
            <div class="box-root flex-flex" style="grid-area: 7 / start / auto / 4;">
              <div class="box-root box-background--blue animationLeftRight" style="flex-grow: 1;"></div>
            </div>
            <div class="box-root flex-flex" style="grid-area: 8 / 4 / auto / 6;">
              <div class="box-root box-background--gray100 animationLeftRight tans3s" style="flex-grow: 1;"></div>
            </div>
            <div class="box-root flex-flex" style="grid-area: 2 / 15 / auto / end;">
              <div class="box-root box-background--cyan200 animationRightLeft tans4s" style="flex-grow: 1;"></div>
            </div>
            <div class="box-root flex-flex" style="grid-area: 3 / 14 / auto / end;">
              <div class="box-root box-background--blue animationRightLeft" style="flex-grow: 1;"></div>
            </div>
            <div class="box-root flex-flex" style="grid-area: 4 / 17 / auto / 20;">
              <div class="box-root box-background--gray100 animationRightLeft tans4s" style="flex-grow: 1;"></div>
            </div>
            <div class="box-root flex-flex" style="grid-area: 5 / 14 / auto / 17;">
              <div class="box-root box-divider--light-all-2 animationRightLeft tans3s" style="flex-grow: 1;"></div>
            </div>
          </div>
        </div>
        <div class="box-root padding-top--24 flex-flex flex-direction--column" style="flex-grow: 1; z-index: 9;">
          <div class="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
            <h1><a rel="dofollow" div="header"> <img src="images/white-dino-logo.svg" style="width: 50px;" alt=""> DINO TECH</a></h1>
          </div>
          <div class="formbg-outer">
            <div class="formbg">
              <div class="formbg-inner padding-horizontal--48">
                <span class="padding-bottom--15" style="text-align: center;">Login your account</span>
                <form id="stripe-login" action="/Php/login.php" method="post">
                  <div class="field padding-bottom--24">
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email">
                  </div>
                  <div class="field padding-bottom--24">
                    <div class="grid--50-50">
                      <label for="password">Password</label>
                    </div>
                    <input type="password" name="password" id="password">
                  </div>
                   
                  <div class="field padding-bottom--24">
                    <input id="login" type="submit" name="submit" value="Continue">
                  </div>
                 
                </form>
              </div>
            </div>
            <div class="footer-link padding-top--24">
            </div>
          </div>
        </div>
      </div>
    </div>

  
  <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>

  <script>
    $(function() {

      $('#login').click(function(e) {

        let self = $(this);

        e.preventDefault(); // prevent default submit behavior

        self.prop('disabled', true);

        var data = $('#stripe-login').serialize(); // get form data

        // sending ajax request to login.php file, it will process login request and give response.
        $.ajax({
          url: 'Php/login.php',
          type: "POST",
          data: data,
        }).done(function(res) {
          res = JSON.parse(res);
          if (res['status']) // if login successful redirect user to secure.php page.
          {
            location.href = "Php/secure.php"; // redirect user to secure.php location/page.
          } else {

            var errorMessage = '';
            // if there is any errors convert array of errors into html string, 
            //here we are wrapping errors into a paragraph tag.
            console.log(res.msg);
            $.each(res['msg'], function(index, message) {
              errorMessage += '<div>' + message + '</div>';
            });
            // place the errors inside the div#error-msg.
            $("#error-msg").html(errorMessage);
            $("#error-msg").show(); // show it on the browser, default state, hide
            // remove disable attribute to the login button, 
            //to prevent multiple form submissions 
            //we have added this attribution on login from submit
            self.prop('disabled', false);
          }
        }).fail(function() {
          alert("error");
          console.log("Error ka po e")
        }).always(function() {
          self.prop('disabled', false);
        });
      });
    });
  </script>
  
</body>
</html>