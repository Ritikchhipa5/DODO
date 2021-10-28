import "./App.css";

import styled from "styled-components";
import { Line } from "react-chartjs-2";
import { useEffect, useState } from "react";

function App() {
  const [TData, setDataChart] = useState([]);
  const [PData, setP] = useState([]);
  useEffect(() => {
    fetch(
      "https://min-api.cryptocompare.com/data/v2/histominute?fsym=BTC&tsym=USD&limit=119&api_key=0646cc7b8a4d4b54926c74e0b20253b57fd4ee406df79b3d57d5439874960146"
    )
      .then((response) => response.json())
      .then((json) => {
        const data = json.Data.Data;
        const times = data.map((obj) => obj.time);
        const prices = data.map((obj) => obj.high);
        setDataChart(times);
        setP(prices);
      });
  }, []);

  console.log(TData);

  const data = {
    labels: TData,
    datasets: [
      {
        label: "$",
        data: PData,
        borderColor: "#54f7db",
        borderJoinStyle: "round",
        borderCapStyle: "round",
        borderWidth: 3,
        pointRadius: 0,
        pointHitRadius: 10,
        lineTension: 0.2,
      },
    ],
  };

  const options = {
    title: {
      display: false,
      text: "BTC chart",
      fontSize: 35,
    },

    legend: {
      display: false,
    },

    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
    },

    scales: {
      xAxes: [
        {
          display: false,
          gridLines: {},
        },
      ],
      yAxes: [
        {
          display: false,
          gridLines: {},
        },
      ],
    },

    tooltips: {
      callbacks: {
        //This removes the tooltip title
        title: function () {},
      },
      //this removes legend color
      displayColors: false,
      yPadding: 10,
      xPadding: 10,
      position: "nearest",
      caretSize: 10,
      backgroundColor: "rgba(255,255,255,.9)",
      bodyFontSize: 15,
      bodyFontColor: "#303030",
    },
  };
  return (
    <div className="App">
      <div>
        <Main>
          <Header>
            <HeaderWrapper>
              <HeaderLeft>
                <a>
                  <svg
                    width="110"
                    height="26"
                    xmlns="http://www.w3.org/2000/svg"
                    class="Logo_Logo__3aa0J"
                  >
                    <path
                      d="M17.74 0c1.093 0 1.978 1.557 1.978 3.478 0 .046 0 .092-.002.138.587-.692 1.271-1.036 1.794-.817.53.223.757.972.65 1.893a4.419 4.419 0 01-.333 1.397 4.73 4.73 0 01-.4.768C29.21 8.576 34.73 14.939 34.644 26h-4.738c.073-9.375-5.398-14.004-12.557-14.15C9.553 11.692 5.238 16.857 4.738 26H0C.607 14.893 5.43 8.126 13.9 6.796a7.96 7.96 0 01-.497-.822c-.664-1.372-.57-2.784.211-3.155.624-.297 1.497.164 2.162 1.061a6.12 6.12 0 01-.014-.402c0-1.92.886-3.478 1.978-3.478zm47.232 8.667a8.61 8.61 0 013.403.672 8.564 8.564 0 012.743 1.836 8.556 8.556 0 011.833 2.761 8.683 8.683 0 01.671 3.397c0 1.2-.224 2.333-.67 3.397a8.552 8.552 0 01-1.834 2.761 8.564 8.564 0 01-2.743 1.837 8.61 8.61 0 01-3.403.672 8.694 8.694 0 01-6.17-2.509 8.546 8.546 0 01-1.832-2.76 8.677 8.677 0 01-.67-3.398c0-1.2.223-2.332.67-3.397a8.55 8.55 0 011.833-2.76 8.694 8.694 0 016.17-2.509zm-19.02 0c1.19 0 2.313.227 3.365.68a8.719 8.719 0 012.741 1.845 8.579 8.579 0 011.836 2.761 8.745 8.745 0 01.673 3.43 8.529 8.529 0 01-.673 3.367 8.61 8.61 0 01-1.836 2.749 8.54 8.54 0 01-2.741 1.832 8.539 8.539 0 01-3.365.669h-6.976V8.667zm55.398 0c1.214 0 2.349.224 3.403.672a8.562 8.562 0 012.743 1.836 8.55 8.55 0 011.833 2.761 8.677 8.677 0 01.671 3.397c0 1.2-.224 2.333-.67 3.397a8.546 8.546 0 01-1.834 2.761 8.562 8.562 0 01-2.743 1.837 8.609 8.609 0 01-3.403.672 8.695 8.695 0 01-6.169-2.509 8.547 8.547 0 01-1.833-2.76 8.677 8.677 0 01-.67-3.398c0-1.2.223-2.332.67-3.397a8.55 8.55 0 011.833-2.76 8.695 8.695 0 016.17-2.509zm-19.02 0c1.19 0 2.312.227 3.365.68a8.719 8.719 0 012.741 1.845 8.574 8.574 0 011.836 2.761 8.745 8.745 0 01.673 3.43 8.528 8.528 0 01-.673 3.367 8.605 8.605 0 01-1.836 2.749 8.54 8.54 0 01-2.741 1.832A8.538 8.538 0 0182.33 26h-6.976V8.667zm-68.905 7.8c.718 0 1.3.61 1.3 1.361v3.344c0 .752-.582 1.361-1.3 1.361-.717 0-1.299-.61-1.299-1.361v-3.344c0-.752.582-1.361 1.3-1.361zm7.795 0c.718 0 1.3.61 1.3 1.361v3.344c0 .752-.582 1.361-1.3 1.361-.717 0-1.299-.61-1.299-1.361v-3.344c0-.752.582-1.361 1.3-1.361zm61.06-4.05h-2.733v10.09h2.734c.58 0 1.129-.128 1.645-.385a4.197 4.197 0 001.343-1.056c.379-.447.677-.977.895-1.59a5.825 5.825 0 00.326-1.964c0-.712-.109-1.379-.326-2a5.173 5.173 0 00-.895-1.615 4.28 4.28 0 00-1.343-1.081 3.55 3.55 0 00-1.645-.398zm-17.449 0c-.62 0-1.202.129-1.744.384a4.301 4.301 0 00-1.397 1.042 4.82 4.82 0 00-.92 1.58 5.747 5.747 0 00-.334 1.975c0 .702.112 1.36.334 1.975.223.615.53 1.141.92 1.58.39.44.856.787 1.397 1.042a4.038 4.038 0 001.744.383c.621 0 1.203-.128 1.744-.383a4.298 4.298 0 001.398-1.042c.39-.439.696-.965.92-1.58a5.75 5.75 0 00.334-1.975c0-.702-.112-1.36-.335-1.975a4.82 4.82 0 00-.92-1.58 4.298 4.298 0 00-1.397-1.042 4.039 4.039 0 00-1.744-.383zm36.378 0c-.621 0-1.202.129-1.744.384a4.306 4.306 0 00-1.397 1.042 4.83 4.83 0 00-.92 1.58 5.747 5.747 0 00-.334 1.975c0 .702.111 1.36.334 1.975.223.615.53 1.141.92 1.58.39.44.856.787 1.397 1.042a4.037 4.037 0 001.744.383c.621 0 1.203-.128 1.744-.383a4.303 4.303 0 001.397-1.042c.39-.439.697-.965.92-1.58a5.742 5.742 0 00.335-1.975 5.74 5.74 0 00-.335-1.975 4.824 4.824 0 00-.92-1.58 4.303 4.303 0 00-1.397-1.042 4.036 4.036 0 00-1.744-.383zm-55.257-.11h-2.766V22.36h2.766c.587 0 1.142-.128 1.664-.384a4.232 4.232 0 001.358-1.052c.384-.446.686-.974.906-1.585.22-.61.33-1.263.33-1.956 0-.71-.11-1.375-.33-1.993a5.14 5.14 0 00-.906-1.61 4.313 4.313 0 00-1.358-1.077 3.637 3.637 0 00-1.664-.396z"
                      fill="#FFE804"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a>Exchange</a>
                <a>Earn</a>
                <a>Tools</a>
                <a>Crowdingpooling</a>
                <a>Governance</a>
                <a>Brdige</a>
              </HeaderLeft>
              <HeaderRight>
                <a>
                  <img
                    src="https://app.dodoex.io/static/media/dodo-logo.c587065e.svg"
                    width="36px"
                  />
                </a>
                <div
                  style={{
                    color: "rgb(255, 232, 4)",
                    borderRadius: "20px",
                    border: "1px solid rgb(255, 232, 4)",
                    padding: "16px",
                  }}
                >
                  Connect to a wallet
                </div>
                <a>
                  <svg
                    width="18px"
                    height="18px"
                    viewBox="0 0 18 18"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                  >
                    <title>grid-fill</title>
                    <g
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g
                        id="右侧导航-设置展开"
                        transform="translate(-337.000000, -759.000000)"
                        fill="currentColor"
                      >
                        <g transform="translate(0.000000, 736.000000)">
                          <g
                            id="grid-fill"
                            transform="translate(337.000000, 23.000000)"
                          >
                            <path
                              d="M2,14 C3.1045695,14 4,14.8954305 4,16 C4,17.1045695 3.1045695,18 2,18 C0.8954305,18 0,17.1045695 0,16 C0,14.8954305 0.8954305,14 2,14 Z M9,14 C10.1045695,14 11,14.8954305 11,16 C11,17.1045695 10.1045695,18 9,18 C7.8954305,18 7,17.1045695 7,16 C7,14.8954305 7.8954305,14 9,14 Z M16,14 C17.1045695,14 18,14.8954305 18,16 C18,17.1045695 17.1045695,18 16,18 C14.8954305,18 14,17.1045695 14,16 C14,14.8954305 14.8954305,14 16,14 Z M2,7 C3.1045695,7 4,7.8954305 4,9 C4,10.1045695 3.1045695,11 2,11 C0.8954305,11 0,10.1045695 0,9 C0,7.8954305 0.8954305,7 2,7 Z M9,7 C10.1045695,7 11,7.8954305 11,9 C11,10.1045695 10.1045695,11 9,11 C7.8954305,11 7,10.1045695 7,9 C7,7.8954305 7.8954305,7 9,7 Z M16,7 C17.1045695,7 18,7.8954305 18,9 C18,10.1045695 17.1045695,11 16,11 C14.8954305,11 14,10.1045695 14,9 C14,7.8954305 14.8954305,7 16,7 Z M2,0 C3.1045695,0 4,0.8954305 4,2 C4,3.1045695 3.1045695,4 2,4 C0.8954305,4 0,3.1045695 0,2 C0,0.8954305 0.8954305,0 2,0 Z M9,0 C10.1045695,0 11,0.8954305 11,2 C11,3.1045695 10.1045695,4 9,4 C7.8954305,4 7,3.1045695 7,2 C7,0.8954305 7.8954305,0 9,0 Z M16,0 C17.1045695,0 18,0.8954305 18,2 C18,3.1045695 17.1045695,4 16,4 C14.8954305,4 14,3.1045695 14,2 C14,0.8954305 14.8954305,0 16,0 Z"
                              id="形状结合"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </a>
              </HeaderRight>
            </HeaderWrapper>
          </Header>
          <ContentWrapper>
            <ContentLeft>
              <ContentLeftWrapper>
                <div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                      src="https://cdn-media.dodoex.io/erc20/https_cdn_media_dodoex_io_usdt_15641fcd40_usdt_15641fcd40_cf25e79a3c.svg"
                      width="27px"
                      style={{ borderRadius: "50%" }}
                    />
                    <span style={{ margin: "" }}>BNB</span>
                    <span>/USDT</span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      color: "white",
                    }}
                  >
                    <div>
                      <span
                        style={{
                          display: "flex",
                          fontSize: "2rem",
                          color: "white",
                        }}
                      >
                        478.8 USDT
                      </span>
                      <span
                        style={{
                          display: "flex",
                          fontSize: "0.8rem",
                          color: "white",
                        }}
                      >
                        <div style={{ color: "#56f6da" }}>
                          2.34563562(+6.06%)
                        </div>
                        Past 24 Hours
                      </span>
                    </div>
                    <span style={{ display: "flex" }}>
                      <div
                        style={{
                          marginLeft: "12px",
                        }}
                      >
                        24W
                      </div>
                      <div style={{ marginLeft: "12px" }}>1W</div>
                      <div style={{ marginLeft: "12px" }}>1M</div>
                    </span>
                  </div>
                  <div>
                    <Line data={data} options={options} />
                  </div>
                </div>
              </ContentLeftWrapper>
            </ContentLeft>
            <ContentRight>
              <ContentRightWrapper>
                <div
                  style={{
                    padding: "20px",
                    width: "100%",
                    minHeight: "483px",
                    opacity: "1",
                    transition: "opacity 0.2s ease 0s",
                    display: "inline-flex",
                    flexDirection: "column",
                  }}
                >
                  <div style={{ padding: "50px 0 " }}>
                    <div style={{ display: "flex", color: "white" }}>Pay</div>
                    <div
                      style={{
                        borderRadius: "10px",
                        borderStyle: "solid",
                        borderColor: "transparent",
                        background: "rgb(55, 55, 57)",
                        borderWidth: "1px",
                        height: "58px",
                        padding: "0px 16px",
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "20px",
                        marginTop: "5px",
                      }}
                    >
                      <img
                        src="https://cdn-media.dodoex.io/BNB_cd49248326/BNB_cd49248326.png"
                        width="26px"
                      />
                      <span style={{ color: "white", marginLeft: "5px" }}>
                        BNB
                      </span>
                      <input
                        style={{
                          width: "100%",
                          marginLeft: "10px",
                          padding: "10px",
                          background: "transparent",
                          border: "0",
                          outline: "none",
                        }}
                        placeholder="0"
                      />
                    </div>
                    <div style={{ display: "flex", color: "white" }}>
                      Recieve
                    </div>
                    <div
                      style={{
                        borderRadius: "10px",
                        borderStyle: "solid",
                        borderColor: "transparent",
                        background: "rgb(55, 55, 57)",
                        borderWidth: "1px",
                        height: "58px",
                        padding: "0px 16px",
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "20px",
                        marginTop: "5px",
                      }}
                    >
                      <img
                        src="https://cdn-media.dodoex.io/erc20/https_cdn_media_dodoex_io_usdt_15641fcd40_usdt_15641fcd40_cf25e79a3c.svg"
                        width="26px"
                      />
                      <span style={{ color: "white", marginLeft: "5px" }}>
                        USDT
                      </span>
                      <input
                        style={{
                          width: "100%",
                          marginLeft: "10px",
                          padding: "10px",
                          background: "transparent",
                          border: "0",
                          outline: "none",
                        }}
                        placeholder="0"
                      />
                    </div>
                    <div
                      style={{
                        borderRadius: "10px",
                        borderStyle: "solid",
                        borderColor: "transparent",
                        background: "yellow",
                        borderWidth: "1px",
                        height: "58px",
                        padding: "0px 16px",
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "30px",
                        alignItems: "center",
                        fontWeight: "bold",
                      }}
                    >
                      <div> Connect to Wallet</div>
                    </div>
                  </div>
                </div>
              </ContentRightWrapper>
            </ContentRight>
          </ContentWrapper>
        </Main>
      </div>
    </div>
  );
}
const Main = styled.div``;
const Header = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  flex-direction: row;
  padding: 0px;
  margin: 0px auto;
  width: 100%;
  z-index: 99;
  height: 80px;
`;
const HeaderWrapper = styled.div`
  height: 100%;
  max-width: 1440px;
  min-width: 800px;
  padding: 0px;
  -webkit-box-pack: justify;
  place-content: center space-between;
  margin: 0px auto;
  position: relative;
  display: flex;
  flex-direction: row;
  a {
    font-size: 16px;
    margin-left: 24px;
    padding: 20px 0px;
    font-weight: 500;
    color: rgb(133, 133, 141);
    display: flex;
  }
`;
const HeaderLeft = styled.div`
  display: flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  max-width: 980px;
  min-width: 360px;
  -webkit-box-flex: 1;
  flex-grow: 1;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 50px;
`;
const HeaderRight = styled.div`
  display: flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  width: 360px;
  max-width: 460px;
  -webkit-box-flex: 1;
  flex-grow: 1;
  -webkit-box-pack: end;
  justify-content: flex-end;
  padding-right: 50px;
  div {
    margin-left: 24px;
  }
`;
const ContentWrapper = styled.div`
  position: relative;
  min-height: calc(100% - 74px);
  display: flex;
  flex-direction: column;
  margin: 0;
  display: flex;
  flex-direction: row;
  margin: 0px auto;
  width: 100%;
  -webkit-box-flex: 1;
  flex-grow: 1;
  padding: 0px;
  min-height: 100vh;
`;
const ContentLeft = styled.div`
  flex: 1 1 980px;
  padding-top: 80px;
  background: rgb(26, 26, 27);
  color: rgb(133, 133, 141);
`;
const ContentLeftWrapper = styled.div`
  max-width: 980px;
  padding-right: 50px;
  padding-left: 50px;
  margin-left: auto;
`;
const ContentRightWrapper = styled.div`
  max-width: 420px;
  padding-right: 50px;
  padding-left: 50px;
  margin-left: auto;
  display: flex;
  max-width: 360px;
  width: 100%;
  margin: 30px auto auto;

  border-radius: 20px;
  background: rgb(26, 26, 27);
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 30px;
  z-index: 1;
  width: 360px;
  margin: 0px auto;
  overflow: hidden;
`;
const ContentRight = styled.div`
  flex: 1 0 460px;
  padding-top: 80px;
  background-color: rgb(55, 55, 57);
`;
export default App;
