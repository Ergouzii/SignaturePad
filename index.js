/**
 * This function handles the click event on tabs.
 *
 * It Takes in evt (event) and a tabName (string).
 *
 * A tabName can be either 'Type', 'Upload', or 'Draw'
 */
const openTab = (evt, tabName) => {
  const tabContent = document.getElementsByClassName('tabContent');
  const tabLinks = document.getElementsByClassName('tabLinks');

  let i;
  /**
   * not using i++ because ++ is subject to automatic semicolon insertion,
   * differences in whitespace can change semantics of source code.
   */
  for (i = 0; i < tabContent.length; i += 1) {
    tabContent[i].style.display = 'none';
  }

  for (i = 0; i < tabLinks.length; i += 1) {
    tabLinks[i].className = tabLinks[i].className.replace(' active', '');
  }

  document.getElementById(tabName).style.display = 'block';
  evt.currentTarget.className += ' active';
};
