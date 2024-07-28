import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export default function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open popover</Button>
              </PopoverTrigger>
              <div className=" w-full h-full justify-center ">

              
      {/*<PopoverContent className=" w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Dimensions</h4>
            <p className="text-sm text-muted-foreground">
              Set the dimensions for the layer.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">Width</Label>
              <Input
                id="width"
                defaultValue="100%"
                className="col-span-2 h-8"
                />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxWidth">Max. width</Label>
              <Input
                id="maxWidth"
                defaultValue="300px"
                className="col-span-2 h-8"
                />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="height">Height</Label>
              <Input
                id="height"
                defaultValue="25px"
                className="col-span-2 h-8"
                />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxHeight">Max. height</Label>
              <Input
                id="maxHeight"
                defaultValue="none"
                className="col-span-2 h-8"
                />
            </div>
          </div>
        </div>
      </PopoverContent> */}
      <PopoverContent className=" max-h-screen">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel quibusdam recusandae in cupiditate non optio assumenda ut beatae voluptatibus possimus, ipsa harum consequuntur, officia ullam explicabo provident aliquam iure? Recusandae.
        Nihil ratione quisquam ipsa corporis. Sapiente minima quae sit eveniet fugit, exercitationem perspiciatis vero architecto commodi provident, et odio repellendus labore neque eum nulla laboriosam! Ipsa porro earum harum! Labore!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, nisi nemo aperiam, omnis molestias, odit repellat sunt ut atque harum laudantium libero aliquid quisquam voluptatibus quae commodi illum voluptatum? Et!
        Unde reiciendis reprehenderit in. Debitis eaque amet similique tenetur, dolorum delectus soluta optio eum pariatur sapiente placeat, eius dignissimos aut natus ab! Perspiciatis sit quae, fugiat delectus a id quia?
        Ad neque dolorem adipisci velit aperiam inventore molestiae, quos maxime voluptatibus numquam facere ratione, sequi esse? Autem, perferendis! Atque perferendis consectetur saepe possimus fuga corrupti necessitatibus delectus quod vitae aliquam?
        Reprehenderit incidunt quas minima mollitia pariatur et repellendus recusandae qui eos dicta beatae libero quia, explicabo soluta temporibus deserunt odio ab quae quaerat laborum nihil! Nesciunt aliquam fuga est ipsa.
        Eos, amet vel delectus reprehenderit expedita eaque officia. Quod, libero cupiditate, doloremque dolores dolorem, officiis pariatur nemo culpa esse illo dolorum distinctio rem. Adipisci culpa, tenetur nostrum magnam magni voluptatem?
        Odio inventore quidem veritatis? Perferendis modi quo vitae, in quod ullam similique perspiciatis suscipit consequuntur quis fuga illo obcaecati repellat facilis dolorem quidem beatae error necessitatibus? Fuga voluptas provident suscipit?
        Commodi fugit autem quod dolore corporis alias quaerat rerum praesentium cum et? Itaque suscipit doloribus veniam assumenda consequatur rerum sequi iure possimus, nostrum, cum deleniti odio nobis consequuntur, mollitia debitis.
        Ut saepe, enim rerum molestiae eum vitae cupiditate doloribus debitis atque tenetur. Non exercitationem vitae ad molestiae libero quidem repudiandae. Aperiam atque sed quaerat magni est laborum veritatis minima sit!
        Reiciendis, harum? Odio ipsum iste, facere nesciunt ratione a corrupti labore obcaecati reprehenderit dolorum sit molestiae quisquam, itaque deleniti consectetur animi optio atque voluptate accusamus recusandae dolor cupiditate, quos sunt.
        Voluptates quam asperiores dolores sed corporis, earum inventore, laborum tenetur dolore neque quasi illo doloribus corrupti? Et ratione perferendis enim numquam sequi. Illo recusandae obcaecati commodi sequi laboriosam minus vitae?
      </PopoverContent>
      </div>
    </Popover>
  )
}
