import React from "react"
import { MapiServiceConsumer } from "../mapi-service-context"

const withMapiService = (mapMethodsToProps) => (Wrapped) => {
    return (props) => {
        return (
            <MapiServiceConsumer>
                {
                    (mapiService) => {
                        const serviceProps = mapMethodsToProps(mapiService)
                        return (
                            <Wrapped {...props} {...serviceProps} />
                        )
                    }
                }
            </MapiServiceConsumer>
        )
    }
}

export default withMapiService
