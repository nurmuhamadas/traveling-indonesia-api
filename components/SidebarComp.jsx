import {Button} from 'primereact/button';
import {PanelMenu} from 'primereact/panelmenu';
import Link from 'next/link';
import {useEffect, useState} from 'react';
import cn from 'classname';
import {useRouter} from 'next/router';

const SidebarComp = () => {
  const [visible, setVisible] = useState(true);
  const router = useRouter();

  const handleToggleMenu = () => {
    setVisible(!visible);
  };

  const navigateTo = (path) => {
    router.push(path);
    return;
  };

  const handleWindowResize = () => {
    if (window.innerWidth > 992) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };


  useEffect(() => {
    window.addEventListener('load', handleWindowResize);
    window.addEventListener('resize', handleWindowResize);
  }, [visible]);

  return (
    <sidebar id="sidebar" className={cn({menu_stat: visible})} >
      <div className="sidebar__wrap">
        <div className="p-panelmenu p-component">
          <div className="p-panelmenu-panel">
            <div className="p-component p-panelmenu-header">
              <Link href="/docs/quick-start" >
                <a className="p-panelmenu-header-link">
                  <span className="p-menuitem-text">Quick start</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="p-panelmenu p-component">
          <div className="p-panelmenu-panel">
            <div className="p-component p-panelmenu-header">
              <Link href="/docs/play-ground" >
                <a className="p-panelmenu-header-link">
                  <span className="p-menuitem-text">Play ground</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <PanelMenu model={items(navigateTo)} style={{width: '300px'}}/>
      </div>
      <div className="open__button">
        <Button
          icon={visible? 'pi pi-times' : 'pi pi-chevron-right'}
          onClick={handleToggleMenu}
        />
      </div>
      <style jsx>{`
        #sidebar {
          width: 300px;
          height: 100%;
          padding: 5.5rem 0 3rem;
          display: block;
          position: absolute;
          left: -300px;
          top: 0;
          background-color: #fff;
          box-shadow: 3px 0 6px rgba(0, 0, 0, 0.075);
          transition: all ease-in-out .3s;
          z-index: 9;
        }

        .sidebar__wrap {
          width: 100%;
          height: 100%;
          background-color: #fff;
          position: relative;
        }

        .open__button {
          position: absolute;
          right: 0;
          transform: translateX(100%);
          top: 7rem;
          z-index: 8;
        }
        .menu_stat {
          left: 0 !important;
        }
      `}</style>
    </sidebar>
  );
};

const items = (navigateTo) => [
  {
    label: 'API documentation',
    items: [
      {
        label: 'Get destinations',
        command: () => navigateTo('/docs/get-destinations'),
      },
      {
        label: 'Search destinations',
        command: () => navigateTo('/docs/search-destinations'),
      },
      {
        label: 'Destination Reviews',
        command: () => navigateTo('/docs/destination-reviews'),
      },
    ],
  },
  {
    label: 'Usage Example',
    items: [
      {
        label: 'Get destinations',
        command: () => navigateTo('/docs/usage-get-destinations'),
      },
      {
        label: 'Search destinations',
        command: () => navigateTo('/docs/usage-search-destinations'),
      },
      {
        label: 'Destination Reviews',
        command: () => navigateTo('/docs/usage-destination-reviews'),
      },
    ],
  },
];

export default SidebarComp;
