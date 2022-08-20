const Map = () => {
    return (
        <div className="map">
            <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.0811345297775!2d84.84899121501635!3d25.535674183739797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed577f6954a4ab%3A0x6ce8f1b9fc2aa02a!2sIndian%20Institute%20Of%20Technology%E2%80%93Patna%20(IIT%E2%80%93Patna)!5e0!3m2!1sen!2sin!4v1660633305204!5m2!1sen!2sin"
                style={{ width: "100%", height: "500px", border: "0", allowFullScreen: "", loading: "lazy", referrerPolicy: "no-referrer-when-downgrade" }}>
            </iframe>
        </div >
    )
}

export default Map

// import GoogleMapReact from 'google-map-react'

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

// const Map = (props) => {
//     return (
//         <div style={{}}>
//             <GoogleMapReact
//                 bootstrapURLKeys={{ key: "" }}
//                 defaultCenter={props.center}
//                 defaultZoom={props.zoom}
//             >
//                 <AnyReactComponent
//                     lat={59.955413}
//                     lng={30.337844}
//                     text="My Marker"
//                 />
//             </GoogleMapReact>
//         </div>
//     )
// }

// Map.defaultProps = {
//     center: {
//         lat: 10.99835602,
//         lng: 77.01502627
//     },
//     zoom: 11
// }
// export default Map