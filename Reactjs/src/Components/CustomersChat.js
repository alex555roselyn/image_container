import React from 'react';
import { fb } from '../utils';
//import { ConfigContext } from '../hooks';

class CustomerChat extends React.PureComponent {
  componentDidMount() {
    this.timeout = setTimeout(() => {
      fb(FB => this.timeout && FB.XFBML.parse());
    }, 2000);
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
    delete this.timeout;
  }

  render() {
    return (
      <ConfigContext.Consumer>
        {config => (
          <div
            className="fb-customerchat"
            attribution="setup_tool"
            page_id={config.facebook.pageId}
            // theme_color="..."
            // logged_in_greeting="..."
            // logged_out_greeting="..."
            // greeting_dialog_display="..."
            // greeting_dialog_delay="..."
            // minimized="false"
            // ref="..."
          />
        )}
      </ConfigContext.Consumer>
    );
  }
}

export default CustomerChat;