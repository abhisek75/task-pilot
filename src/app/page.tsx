import { Button } from "@/components/ui/button";

export default function home() {
  return (
    <div className="">
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
        <Button variant ="teritrary"> 
        Teritrary
        </Button>
    </div>
  )
}