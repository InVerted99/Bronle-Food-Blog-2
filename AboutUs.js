import { renderFooter } from './Shared/Footer.js';
import { renderHeader } from './Shared/Header.js';
import { renderLongCta } from "./Shared/LongCta.js";

function renderUs () {
    renderHeader();
    renderFooter();

    let subscriptionHTML = renderLongCta();

    document.querySelector('.subscription-section')
        .innerHTML = subscriptionHTML;
}

renderUs();

