class ValidatorForm {
  validEmail(email) {
    return email.match(
      /[-a-z0-9!#$%&'*+/=?^_`{|}~]+(?:\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@(?:[a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(?:aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z]|[a-z][a-z][a-z]|[а-я][а-я]|[а-я][а-я][а-я])$/g
    );
  }
  validPassword(pass) {
    if (pass.length < 8) {
      return false;
    }
    if (!pass.match(/[A-Z]+|| [А-Я]+/)) {
      return false;
    }
    if (!pass.match(/[a-z]+||[а-я]+/)) {
      return false;
    }
    if (!pass.match(/[0-9]+/)) {
      return false;
    }
    return true;
  }
}

export default new ValidatorForm();
