AFRAME.registerComponent("bullets", {
    init : function(){
        this.shootBullet();
    },
    shootBullet: function(){
        window.addEventListener("keydown", e=>{
            if(e.key === "z"){
                var bullet = document.createElement('a-entity')
                bullet.setAttribute('material', 'color','black')
                bullet.setAttribute('geometry', {
                    primitive: 'sphere',
                    radius: 0.1
                })
                var cam = document.querySelector('#camera')
                var camera = document.querySelector('#camera').object3D
                var direction = new THREE.Vector3()
                camera.getWorldDirection(direction)
                bullet.setAttribute('velocity', direction.multiplyScaler(-10))
                
                pos = cam.getAttribute('position')
                bullet.setAttribute('positon', {x: pos.x, y: pos.y, z: pos.z})
                bullet.setAttribute('velocity', {x: 0, y:0, z: -1})
                //cam.appendChild(bullet)
                var scene = document.querySelector('#scene')
                scene.appendChild(bullet)
            }
        })
    },
})