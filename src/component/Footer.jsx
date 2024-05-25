import "../style/footer.css";
function Footer() {
  return (
    <>
      <div className = "note">
      <p> The queue length may vary when you arrive. Come and vote right away!!
          <br />
          ਤੁਹਾਡੇ ਪਹੁੰਚਣ 'ਤੇ ਕਤਾਰ ਦੀ ਲੰਬਾਈ ਵੱਖਰੀ ਹੋ ਸਕਦੀ ਹੈ। ਆਓ ਅਤੇ ਤੁਰੰਤ ਵੋਟ ਪਾਓ !!</p>
      </div>
      <div className="footer">
        
        <h2>
          {" "}
          <strong> &copy; Department of Computer Science and Engineering, National Institute of Technology, Jalandhar</strong>
        </h2>
      </div>
    </>
  );
}
export default Footer;
