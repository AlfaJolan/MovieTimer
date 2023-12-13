import React, { Component } from 'react'

import './item-details.css'
import MapiService from "../../services/mapi-service";
import Spinner from "../spinner"
import './movie-main-poster.css'

const API_IMG="https://image.tmdb.org/t/p/w500/";

export default class MovieMainPosterClass extends Component {

    mapiService = new MapiService()

    state = {
        item: null,
        image: null,
        loading: true
    }

    componentDidMount() {
        this.updateItem()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.itemId !== prevProps.itemId ||
            this.props.getData !== prevProps.getData ||
            this.props.getImageUrl !== prevProps.getImageUrl) {
            this.updateItem()
            this.setState({ loading: true })
        }
    }

    updateItem = () => {
        const { itemId, getData, getImageUrl } = this.props
        if (!itemId) {
            return
        }

        getData(itemId)
            .then((item) => {
                this.setState({
                    item,
                    image: getImageUrl(item),
                    loading: false
                })
            })
    }

    render() {

        if (!this.state.item)
            return <span>Select an item from a list</span>

        const { item, image, loading } = this.state

        const spinner = loading ? <Spinner /> : null

        const content = !loading ? <MainPosterView item={item} image={image} context={this.props.children}/> : null

        return (
            <div className="item-details card">
                { spinner }
                { content }
            </div>
        )
    }
}

const MainPosterView = ({ item, image, context }) => {

    const { name, type } = item

    return (
        <div id = "mainPoster" className= "order-1 col-lg-3 col-md-3 col-xl-3 col-4 mx-1">
            <img src={API_IMG+image} className= "d-block w-100" alt="" />
                <div id = "media" className= "container ps-0 pe-0 mt-1 d-none d-lg-block d-md-block d-xl-block p-1">
                    <div className="trailer embed-responsive">
                        <iframe className="" src="https://youtu.be/dQw4w9WgXcQ?si=eXd3eyy1oA6Tq-a4" title="YouTube video player Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
        </div>
    )
}
