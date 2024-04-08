
import { Storage } from 'megajs'

export const ready = async (selectedVideo) => {
    console.log('backedn', selectedVideo)
    const storage = await new Storage({
        email: process.env.NEXT_PUBLIC_MEGA_GMAIL,
        password: process.env.NEXT_PUBLIC_MEGA_PASSWORD,

      }).ready
      
      const file = await storage.upload('hello-world.txt', 'video').complete
      console.log('The file was uploaded!', file)
}
