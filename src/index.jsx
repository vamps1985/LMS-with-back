import React from 'react';
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import createHistory from 'history/createBrowserHistory';
import RootContainer from '@/containers/RootContainer';

const history = createHistory();

render(<AppContainer>
    <RootContainer history={history}/>
</AppContainer>, document.getElementById('root'),);

if (module.hot) {
    module.hot.accept('./containers/RootContainer', () => {
        const NewRoot = require('./containers/RootContainer').default;
        render(<AppContainer>
            <NewRoot history={history}/>
        </AppContainer>, document.getElementById('root'),);
    });
}
