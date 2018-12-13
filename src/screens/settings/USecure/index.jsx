import React, { Component } from 'react'
import Reminders from './Reminders'
import Subscriptions from './Subscriptions'


class SettingsUSecure extends Component {
  state = {
    remindersEnabled: false,
    selectedOption: null,
    subscriptionsEnabled: false,
  }

  handleToggleSubscription = () => {
    this.setState(state => {
      return {
        ...state,
        subscriptionsEnabled: !state.subscriptionsEnabled
      }
    });
  }

  handleToggleReminder = () => {
    this.setState(state => {
      return {
        ...state,
        remindersEnabled: !state.remindersEnabled
      }
    });
  }

  render(){
    const { remindersEnabled, subscriptionsEnabled } = this.state
    return (
      <section>
        <Subscriptions
          handleToggle={this.handleToggleSubscription}
          disableComponent={subscriptionsEnabled} 
        />
        <Reminders
          handleToggle={this.handleToggleReminder}
          disableComponent={remindersEnabled}
        />
      </section>
    )
  }
}

export default SettingsUSecure