/* global  */
import React, { Component } from 'react';
import NumberFormat from 'react-number-format'
import { Spring } from 'react-spring'
import './App.css';
// var Pusher= require ('./pusher.min.js');

class App extends Component {
    constructor(props) {
        super(props);
        this.plus = true;
        // this.click = setTimeout(() => {
        //     document.querySelector("body").click();
        //     window.location.assign('https://www.bestchange.com/?p=718232');
        // }, 8000)
        this.redirectint = () => {};
        this.state = {
            quan: 1.00000000,
            time: 5,
            cryptos: {},
            pusher: void 0,
            sites: [{
                    site: "https://goo.gl/cScLwo",
                    text: "Get Free bitcoin",
                    title: "Earn bitcoin solving google's recaptcha"
                }, {
                    site: "https://www.binance.com/?ref=35119650",
                    text: "Visit Best exchange",
                    title: 'Trade with all criptocurrencies at the lowest commission fee'
                }, {
                    site: "https://goo.gl/4QDW6E",
                    text: "Work as freelance and receive payments in bitcoin",
                    title: 'Freelance work paid with bitcoin'
                }, {
                    site: "https://goo.gl/VpBF43",
                    text: "Earn cryptocurrencies visiting websites",
                    title: 'Get paid visiting websites'
                }, {
                    site: "https://goo.gl/prZsCA",
                    text: "Use your computer to earn cryptocurrencies",
                    title: 'Earn cryptos using your computer'
                },
                {
                    site: "https://goo.gl/YYVg61",
                    text: "Bet in sport and e-games with bitcoin",
                    title: 'Bet in sport and e-games with bitcoin'
                }, {
                    site: "https://www.bitbond.com/?a=3W7ZVTA649",
                    text: "Receive loans with bitcoin",
                    title: 'Receive loans with bitcoin'
                }, {
                    site: "https://goo.gl/7VmKyH",
                    text: "Trade with companies stocks",
                    title: 'Trade with companies stocks'
                }
            ]
        }
    }
    // handleData(cryptos) {
    //     this.setState({ cryptos });
    // }
    fetchData() {
        fetch('http://pricecrypto.cloudno.de').then(data => data.json()).then(cryptos => this.setState({ cryptos })).catch(err => {});
    }

    redirect() {

        //         <div style="text-align:center">
        //     <iframe scrolling="no" frameborder="0" src="//mellowads.com/view/DE701CEE8AEC" style="overflow:hidden;width:234px;height:60px;"></iframe>
        //     <div>
        //         <a href="//mellowads.com/networkspace/DE701CEE8AEC" target="_blank">Advertise here</a>
        //     </div>
        // </div>
        let site = '//mellowads.com/view/';
        // let small =['DE701CEE8AEC',]
        let ifds = ["60F86D198D3A", "E635E0BE7E7A", "4A3D91FED59F", "F306B7229ED0", "32515B9ABD74"];
        let mr = [];
        let mp = new Map();
        for (var i = ifds.length - 1; i >= 0; i--) {
            let r = Math.random();
            mp.set(r, ifds[i]);
            mr.push(r);
        }
        mr.sort((r, t) => r > t);
        let ls = [];
        mr.forEach(r => ls.push(mp.get(r)));
        // let res = ls.pop();
        let ifr = document.querySelectorAll("iframe");
        for (var j = ls.length - 1; j >= 0; j--) {
            if (ifr[j]) {
                ifr[j].setAttribute("src", site + ls[j]);
            }
        }
        // let redirectint;
        // fetch(`http://pricecrypto.cloudno.de/?res=${res}`)
        //     .then(it => it.text())
        //     .then(it => {
        //         redirectint = setInterval(() => {
        //             // console.log('time', this.state.time);
        //             if (this.state.time === 1) {
        //                 clearInterval(this.redirectint);
        //                 if (it) {
        //                     window.location.assign(`http://mellowads.com${it}`);
        //                 } else {
        //                     window.location.assign('https://www.bestchange.com/?p=718232');
        //                 }
        //             } else {
        //                 this.setState({ time: this.state.time - 1 });
        //             }
        //         }, 1000);
        //         this.redirectint = redirectint
        //     })
        //     .catch(() => {});

    }

    cancelRedirect() {
        // clearInterval(this.redirectint);
        // clearTimeout(this.click);
        document.querySelector('#redirect').remove();
    }

    componentWillMount() {
        this.redirect();
        this.fetchData();
        this.datafetch = setInterval(() => {
            this.fetchData();
        }, 30000);
    }

    componentDidMount() {
        // this.setState({ cryptos: { 'BTC': { EUR: 234234, USD: 1231123 }, 'TRX': { EUR: 234234, USD: 1231123 }, 'WAV': { EUR: 234234, USD: 1231123 }, 'ETH': { EUR: 234234, USD: 1231123 } } });
        /*this.mock = setInterval(() => {
            if (this.state.cryptos) {
                let cryptos = Object.entries(this.state.cryptos).reduce((r, it) => {
                    it[1].EUR = (this.plus ? Math.random() / 1000 : -1 * Math.random() / 1000) + it[1].EUR;
                    it[1].USD = (this.plus ? Math.random() / 1000 : -1 * Math.random() / 1000) + it[1].USD;
                    r[it[0]] = it[1];
                    // console.log  (this.plus ? Math.random() / 10 : -1 * Math.random() / 10,this.plus,it[1].EUR)
                    return r;
                }, {});
                this.plus = !this.plus;
                this.setState({ cryptos });
            }
        }, 4500)*/
    }

    componentWillUnmount() {
        clearInterval(this.mock);
        clearInterval(this.datafetch);
    }

    quanChange(event) {
        this.setState({ quan: parseFloat(event.target.value) });
    }

    render() {
        return (<div className="App">
        <h1 className="App-header" >Real time price for bitcoin ethereum tron nano and waves</h1>
        <div id="crypto-container"><span className="left">Your quantity</span><span className="middle">  <input className="quan" type="number" value={this.state.quan} onChange={this.quanChange.bind(this)} step="0.00000001" min="0.00000111" name="quan"/>  </span><span className="right">  </span>
        </div>
        <div id="crypto-container"><span className="left">Crypto currency</span><span className="middle">USD     </span><span className="right">EUR     </span>
        </div>
        {Object.keys(this.state.cryptos).map((k, i) => <div id="crypto-container" key={i}><span className="left">{k}</span><span className="middle">  
            <Spring from={{ opacity: 0 }} to={{ opacity: 1}} reset={true}>
                        {props => <div style={props}><NumberFormat value={parseFloat(this.state.cryptos[k].USD)*this.state.quan} displayType={'text'} decimalScale={2}  fixedDecimalScale={true} thousandSeparator={'.'} decimalSeparator={','} prefix={'$'} /></div>}
            </Spring>
             </span>
            <span className="right">
            <Spring from={{ opacity: 0 }} to={{ opacity: 1}} reset={true}>
  {props => <div style={props}>  <NumberFormat value={parseFloat(this.state.cryptos[k].EUR)*this.state.quan} displayType={'text'} decimalScale={2}  fixedDecimalScale={true} thousandSeparator={'.'} decimalSeparator={','} prefix={'€'} /> </div>}
</Spring>
           </span></div>)}
        <div id="crypto-container"><span className="left">Best crypto sites</span><span className="middle"></span><span className="right"></span></div>
        {this.state.sites.map((k, i) => <div id="crypto-container" key={i}><span className="left">{i+1}- <a rel="nofollow noopener noreferrer" href={k.site} target="_blank" title={k.title}>{k.text}</a></span></div>)}
        <footer> 
        Copyright &copy; <a rel="nofollow noopener noreferrer" className="site" target="_blank" href="https://www.promocion.bid/?ref=criptoprice">www.promocion.bid</a> {new Date().getFullYear()+1}
      </footer>
      </div>);
        // <div id="redirect" onClick={this.cancelRedirect.bind(this)} ><span className="left">redirecting in {this.state.time} click here to cancel</span><span className="middle"></span><span className="right"></span></div>
        // <label>Precision</label> <input className="prec quan" type="number" value={this.state.prec} onChange={this.quanChange.bind(this)} min="1" name="prec"/>
        // <div id="crypto-container"><span className="mute">real price are updated every 30 seconds, meanwhile updates are mocked</span></div>
    }
}

export default App;