
static propTypes = {
  pageId: PropTypes.string.isRequired,
  appId: PropTypes.string.isRequired,
 
  shouldShowDialog: PropTypes.bool,
  htmlRef: PropTypes.string,
  minimized: PropTypes.bool,
  themeColor: PropTypes.string,
  loggedInGreeting: PropTypes.string,
  loggedOutGreeting: PropTypes.string,
  greetingDialogDisplay: PropTypes.oneOf(['show', 'hide', 'fade']),
  greetingDialogDelay: PropTypes.number,
  autoLogAppEvents: PropTypes.bool,
  xfbml: PropTypes.bool,
  version: PropTypes.string,
  language: PropTypes.string,
  debug: PropTypes.bool,
  onCustomerChatDialogShow: PropTypes.func,
  onCustomerChatDialogHide: PropTypes.func,
};
 
static defaultProps = {
  shouldShowDialog: false,
  htmlRef: undefined,
  minimized: undefined,
  themeColor: undefined,
  loggedInGreeting: undefined,
  loggedOutGreeting: undefined,
  greetingDialogDisplay: undefined,
  greetingDialogDelay: undefined,
  autoLogAppEvents: true,
  xfbml: true,
  version: '2.11',
  language: 'en_US',
  debug: false,
  onCustomerChatDialogShow: undefined,
  onCustomerChatDialogHide: undefined,
};




