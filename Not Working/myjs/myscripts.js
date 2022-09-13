//function getCookie
function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1);
    if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
  }
  return "";
}

function popLink(url) {
  void window.open(
    url,
    "",
    "alwaysRaised=yes,resizable=yes,scrollbars=yes,width=1200,height=600,left=100,top=100,screenX=100,screenY=100"
  );
}

function popLinkDetails(url) {
  void window.open(
    url,
    "",
    "alwaysRaised=yes,resizable=yes,scrollbars=yes,width=600,height=525,left=100,top=100,screenX=100,screenY=100"
  );
}

function openLink(url, message) {
  window.location.href = url;
}

//Footer form validation
function validateShortTrialForm() {
  if (
    document.ShortTrialForm.txtFirstName.value == "" ||
    document.ShortTrialForm.txtFirstName.value ==
      "<%=strLoc_Inquiry_Your_First_Name%>"
  ) {
    alert("Please enter your first name.");
    document.ShortTrialForm.txtFirstName.focus();
    return false;
  }

  if (
    document.ShortTrialForm.txtEmail.value == "" ||
    document.ShortTrialForm.txtEmail.value == "<%=strLoc_Inquiry_Your_Email%>"
  ) {
    alert("Please enter your email address.");
    document.ShortTrialForm.txtEmail.focus();
    return false;
  }

  //If email is entered make sure it is valid
  if (document.ShortTrialForm.txtEmail.value != "") {
    if (
      document.ShortTrialForm.txtEmail.value.indexOf("@", 0) == -1 ||
      document.ShortTrialForm.txtEmail.value.indexOf(".", 0) == -1
    ) {
      alert("Your email address appears incorrect... please re-enter it..");
      document.ShortTrialForm.txtEmail.focus();
      return false;
    }
  }

  return true;
}

//Exit overlay form validation
function validateExitForm() {
  if (
    document.ExitForm.txtFirstName.value == "" ||
    document.ExitForm.txtFirstName.value ==
      "<%=strLoc_Inquiry_Your_First_Name%>"
  ) {
    alert("Please enter your first name.");
    document.ExitForm.txtFirstName.focus();
    return false;
  }

  if (
    document.ExitForm.txtEmail.value == "" ||
    document.ExitForm.txtEmail.value == "<%=strLoc_Inquiry_Your_Email%>"
  ) {
    alert("Please enter your email address.");
    document.ExitForm.txtEmail.focus();
    return false;
  }

  //If email is entered make sure it is valid
  if (document.ExitForm.txtEmail.value != "") {
    if (
      document.ExitForm.txtEmail.value.indexOf("@", 0) == -1 ||
      document.ExitForm.txtEmail.value.indexOf(".", 0) == -1
    ) {
      alert("Your email address appears incorrect... please re-enter it..");
      document.ExitForm.txtEmail.focus();
      return false;
    }
  }

  return true;
}
