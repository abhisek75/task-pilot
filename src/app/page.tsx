import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function home() {
  return (
    <div className="">
      <Input />
      <Button>
        Primary
        </Button>
        <Button variant ="secondary"> 
        Secondary
        </Button>
        <Button variant ="destructive"> 
        Destructive
        </Button>
        <Button variant ="ghost"> 
        Ghost
        </Button>
        <Button variant ="muted"> 
        Muted
        </Button>
        <Button variant ="outline"> 
        outline
        </Button>
        <Button variant ="teritary"> 
        Teritrary
        </Button>
    </div>
  )
}