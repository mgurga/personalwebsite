export function HitCounter() {
    const css = `
    #counterimg, #counternum {
    }
    #counterholder {
        position: relative;
        width: 372px;
        height: 36px;
    }
    #counterimg {
        width: 372px;
        z-index: -1;
    }
    #counternum {
        position: absolute;
        font-family: Garamond, serif;
        font-weight: bold;
        font-size: 18px;
        transform: scale(1) rotate(0deg) translate(0px, 0px) skew(15deg, 0deg);
        letter-spacing: 42.5px;
        top: 0;
        margin-left: 55.5px;
        margin-top: 5px;
    }
    `;
    const scr = `
    fetch("/hitcounter").then(x => x.text()).then(hits => {
        document.getElementById("counternum").innerHTML = String(hits).padStart(6, "0");
    });
    `;
    return (
        <div id="counterholder">
            <img id="counterimg" src="/counterbase.png" alt="hit counter background" />
            <p id="counternum" alt="hit counter number">000001</p>

            <style>{css}</style>
            <script dangerouslySetInnerHTML={{
            __html: scr
            }} />
        </div>
    );
}