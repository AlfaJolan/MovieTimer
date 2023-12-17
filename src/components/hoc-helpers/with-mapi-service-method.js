// with-mapi-service-method.js
import React from 'react';
import { withRouter } from 'react-router-dom';
import { MapiServiceConsumer } from '../mapi-service-context';

const withMapiServiceMethod = (WrappedComponent, mapiServiceMethod) => {
    return withRouter(({ match, ...restProps }) => (
        <MapiServiceConsumer>
            {(mapiService) => {
                console.log(`Calling ${mapiServiceMethod} with id: ${match.params.id}`);

                const dataGetter = () => mapiService[mapiServiceMethod](match.params.id); // Вызываем метод здесь
                console.log('typeof dataGetter:', typeof dataGetter);

                return <WrappedComponent getData={dataGetter} {...restProps} />;
            }}
        </MapiServiceConsumer>
    ));
};

export default withMapiServiceMethod;
