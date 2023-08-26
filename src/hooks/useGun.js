import 'gun/lib/mobile'
import Gun from 'gun/gun'
import SEA from 'gun/sea'

const useGun = () => {
  const gun=Gun({
    peers: ['http://localhost:8765/gun']
  })

  const app = gun.get('venn')
  const user = gun.user()
  return {gun, app, user, SEA}
}

export default useGun
