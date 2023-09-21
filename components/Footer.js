import React from 'react'

const Footer = () => {
  return (<>
    <div className="footer">
                <div className="sb_footer-copyright">
                    <p>
                        {new Date().getFullYear()} &copy; LegalEase.ai
                    </p>
                </div>
                <div className="sb_footer-below-links">
                    <a href="/terms"><div><p>Terms &Conditions</p></div></a>
                    <a href="/privacy"><div><p>Privacy</p></div></a>
                </div>
            </div>
            </>)
}

export default Footer