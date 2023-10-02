import Button from "../common/Button"

const Header = () => {
    return (
      <header className="header">
        <span className="header-section">
          <div className="logo">minimicon</div>
          <p className="header-version">pre-release version - icons may change</p>
        </span>
        
        <span className="header-section">
          <Button onclick={() => window.open('https://github.com/hamer0/minimicon')}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.40002C6.69842 2.40002 2.40002 6.69842 2.40002 12C2.40002 16.4984 5.49762 20.2624 9.67362 21.304C9.62882 21.1744 9.60002 21.024 9.60002 20.8376V19.1968C9.21042 19.1968 8.55762 19.1968 8.39362 19.1968C7.73682 19.1968 7.15282 18.9144 6.86962 18.3896C6.55522 17.8064 6.50082 16.9144 5.72162 16.3688C5.49042 16.1872 5.66642 15.98 5.93282 16.008C6.42482 16.1472 6.83282 16.4848 7.21682 16.9856C7.59922 17.4872 7.77922 17.6008 8.49362 17.6008C8.84002 17.6008 9.35842 17.5808 9.84642 17.504C10.1088 16.8376 10.5624 16.224 11.1168 15.9344C7.92002 15.6056 6.39442 14.0152 6.39442 11.856C6.39442 10.9264 6.79042 10.0272 7.46322 9.26962C7.24242 8.51762 6.96482 6.98402 7.54802 6.40002C8.98642 6.40002 9.85602 7.33282 10.0648 7.58482C10.7816 7.33922 11.5688 7.20002 12.396 7.20002C13.2248 7.20002 14.0152 7.33922 14.7336 7.58642C14.94 7.33602 15.8104 6.40002 17.252 6.40002C17.8376 6.98482 17.5568 8.52482 17.3336 9.27522C18.0024 10.0312 18.396 10.928 18.396 11.856C18.396 14.0136 16.8728 15.6032 13.6808 15.9336C14.5592 16.392 15.2 17.68 15.2 18.6504V20.8376C15.2 20.9208 15.1816 20.9808 15.172 21.052C18.9128 19.7408 21.6 16.1888 21.6 12C21.6 6.69842 17.3016 2.40002 12 2.40002Z"/>
            </svg>

            Documentation
          </Button>

          {/* <Button onclick={() => window.open('https://github.com/hamer0/minimicon')}>
            <svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="white" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 4L8 10"/>
            <path d="M8 10L6.5 8.5"/>
            <path d="M8 10L9.5 8.5"/>
            <path d="M11.5 10V12H4.5V10" />
            </svg>


            Download zip
          </Button> */}
        </span>

      </header>
    )
  }

export default Header