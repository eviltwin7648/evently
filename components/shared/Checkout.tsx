import { IEvents } from "@/lib/database/models/event.model"
import { Button } from "../ui/button"

type checkoutProps ={
    event: IEvents,
    userId: string
    
}

const Checkout = ({event ,userId}:checkoutProps) => {
    const onCheckout = async ()=>{console.log('CheckOut')}
  return (
    <form action={onCheckout}
    method="post"
    >
        <Button type="submit" role="link" size='lg' className="button sm:w-fit">
            {event.isFree ? 'Get Tickets' : 'Buy Tickets'}
        </Button>
    </form>
  )
}

export default Checkout