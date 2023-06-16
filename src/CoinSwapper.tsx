import { useEffect, useState } from "react";
import Loader from "./Loader";
import detectEthereumProvider from '@metamask/detect-provider'
import Web3 from "web3";

const CoinSwapperPage = () => {
    const [showConnect, setShowConnect] = useState(false);
    const [loader, setLoader] = useState(true);
    const [connectedWallet, setConnectedWallet] = useState({ accounts: [] });
    const [balance, setBalance] = useState(0.0);

    const checkForMetamask = async () => {
        const provider = await detectEthereumProvider({ silent: true });
        setShowConnect(Boolean(provider));
        if (provider) {
            const accounts = await window.ethereum.request({
                method: "eth_accounts"
            })
            refreshAccounts(accounts);
            window.ethereum.on('accountsChanged', refreshAccounts)
        }
        setLoader(false);
    };

    const refreshAccounts = (accounts: any) => {
      if (accounts.length > 0) {
        setConnectedWallet({ accounts });
      } else {
        setConnectedWallet({ accounts: [] });
      }
    }

    useEffect(() => {
        checkForMetamask();
        return () => {
            window.ethereum?.removeListener('accountsChanged', refreshAccounts);
        };
    }, []);

    useEffect(() => {
        if (connectedWallet.accounts.length > 0) {
            const web3 = new Web3("https://polygon-mainnet.g.alchemy.com/v2/BfA_PSKGjFraxkjNmKDXYwZTBAEf1Iqq");
            web3.eth.getBalance(connectedWallet.accounts[0]).then((bal) => {
                try {
                    const balanc = parseFloat(web3.utils.fromWei(bal, 'ether'));
                    if (balanc > 0) {
                        setBalance(balanc);
                    }
                } catch(e) {}
            });
        }
    }, [connectedWallet.accounts]);

    const handleConnect = async () => {
        try {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            setConnectedWallet({ accounts });
        } catch (e) {
            console.log("FACED ISSUE WHILE CONNECTING", e)
        }
    } 

    return (
        <div className="flex flex-col justify-content md:my-8 my-6">
            {
                loader ? <Loader /> :
                <>
                    {!showConnect && (
                        <div> INSTALL METAMASK EXTENSION </div>
                    )}
                    {showConnect && connectedWallet.accounts.length < 1 && (
                            <div>
                                <button
                                    className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                    onClick={handleConnect}
                                >
                                    CONNECT WALLET
                                </button>
                            </div>
                        )
                    }
                    { connectedWallet.accounts.length > 0 &&
                        <div className="mb-6 md:mb-8">
                            <p className=" overflow-hidden">
                                <span className="whitespace-nowrap font-bold">Wallet Addr: </span>
                                <span className="break-words">
                                    { connectedWallet.accounts[0] }
                                </span>
                            </p>
                            <p className=" overflow-hidden">
                                <span className="whitespace-nowrap font-bold">MATIC Balance: </span>
                                <span className="break-words">
                                    { balance }
                                </span>
                            </p>
                        </div>
                    }
                    <CoinSwappingComponent balance={balance} />
                </>
            }
        </div>
    );
};

type SwappingProps = {
    balance: number
}

const CoinSwappingComponent = (props: SwappingProps) => {
    const [fromValue, setFromValue] = useState('0.0');
    const [fromCurrency, setFromCurrency] = useState('ETH');
    const [toValue, setToValue] = useState('0.0');
    const [toCurrency, setToCurrency] = useState('DAI');
    const [spin, setSpin] = useState(false);

    const handleSwap = () => {
        setSpin(true);
        setTimeout(() => setSpin(false), 100);
        const tempValue = fromValue;
        const tempCurrency = fromCurrency;
        setFromValue(toValue);
        setFromCurrency(toCurrency);
        setToValue(tempValue);
        setToCurrency(tempCurrency);
    };
    return (
        <div className="md:w-1/2 self-center">
            <div className="relative">
                <div className="relative bg-gray-200 px-4 rounded-md p-4 overflow-hidden mb-4">
                    <div className="text-slate-300 mb-4 absolute -right-7 top-5 text-4xl font-bold z-1 -rotate-90">From</div>
                    <div className="relative bg-transparent w-full p-2 border-2 border-gray-500 rounded-md flex align-items z-10">
                        <input
                            type="number"
                            className="bg-gray-200 border-0 focus:outline-none w-full text-xl"
                            value={fromValue}
                            onChange={(e) => setFromValue(e.target.value)}
                        />
                        <select
                            className="bg-slate-400 rounded-full outline-none flex-1 px-2 border-r-8 border-slate-400 cursor-pointer"
                            value={fromCurrency}
                            onChange={(e) => setFromCurrency(e.target.value)}
                        >
                            <option value="option1">ETH</option>
                            <option value="option2">DAI</option>
                            <option value="option3">HEX</option>
                            <option value="option3">SHIB</option>
                        </select>
                    </div>
                </div>
                <div className="relative bg-gray-200 px-4 rounded-md p-4 overflow-hidden">
                    <div className="text-slate-300 mb-4 absolute -right-4 top-3 text-6xl font-bold z-1 -rotate-90">To</div>
                    <div className="relative bg-transparent w-full p-2 border-2 border-gray-500 rounded-md flex align-items z-10">
                        <input
                            type="number"
                            className="bg-gray-200 border-0 focus:outline-none w-full text-xl"
                            value={toValue}
                            onChange={(e) => setToValue(e.target.value)}
                        />
                        <select
                            className="bg-slate-400 rounded-full outline-none flex-1 px-2 border-r-8 border-slate-400 cursor-pointer"
                            value={toCurrency}
                            onChange={(e) => setToCurrency(e.target.value)}
                        >
                            <option value="option1">ETH</option>
                            <option value="option2">DAI</option>
                            <option value="option3">HEX</option>
                            <option value="option3">SHIB</option>
                        </select>
                    </div>
                </div>
                <div onClick={handleSwap} className={`w-8 rotate-90 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-black rounded-full p-1 cursor-pointer ${spin ? 'scale-110' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFF">
                        <g id="Layer_2" data-name="Layer 2">
                            <g id="swap">
                                <g id="swap-2" data-name="swap">
                                    <rect style={{fill: "#FFF", opacity: 0}} className="cls-1" width="24" height="24" transform="translate(0 24) rotate(-90)"/>
                                    <path className="cls-2" style={{fill: "#231f20"}} d="M4,9H17l-1.6,1.2a1,1,0,0,0-.2,1.4,1,1,0,0,0,.8.4,1,1,0,0,0,.6-.2l4-3a1,1,0,0,0,0-1.59l-3.86-3a1,1,0,0,0-1.23,1.58L17.08,7H4A1,1,0,0,0,4,9Z"/>
                                    <path style={{fill: "#231f20"}} className="cls-2" d="M20,16H7l1.6-1.2a1,1,0,0,0-1.2-1.6l-4,3a1,1,0,0,0,0,1.59l3.86,3a1,1,0,0,0,.61.21,1,1,0,0,0,.79-.39,1,1,0,0,0-.17-1.4L6.92,18H20a1,1,0,0,0,0-2Z"/>
                                </g>
                            </g>
                        </g>
                    </svg>
                </div>
            </div>
            <button disabled={props.balance == 0} className={`bg-blue-500 text-white font-bold py-2 px-4 rounded w-full mt-4 md:mt-8 ${props.balance == 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}`}>
                SWAP
            </button>
        </div>
    );
};

export default CoinSwapperPage;