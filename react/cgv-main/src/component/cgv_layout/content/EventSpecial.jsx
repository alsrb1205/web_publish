import Event from "./Event"
import Notice from "./Notice"
import Package from "./Package"
import Special from "./Special"
export default function EventSpecial() {
    return (
        <div class="content-event-special content-padding">
            <Event />
            <Special />
            <Package />
            <Notice/>
        </div>

    )

}