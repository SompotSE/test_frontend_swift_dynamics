import React from 'react'
import { useTranslation } from "react-i18next";
import { Row, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

interface ShapeState {
    shape1: any;
    shape2: any;
}

function MoveShape() {
    const [shapeForm, setShape] = React.useState<ShapeState>({
        shape1: ['circle', 'square', 'cone'],
        shape2: ['rectangle', 'oval', 'trapezoid'],
    });

    const { t } = useTranslation();
    const navigate = useNavigate();

    const onClickPathHome = () => {
        navigate("/");
    }

    // var data1 = ['circle', 'square', 'cone']
    // var data2 = ['rectangle', 'oval', 'trapezoid']

    // var shape1 = <>
    //     <div className='background-buttom-sh'>
    //         <div id="circle"></div>
    //     </div>
    //     <div className='background-buttom-sh'>
    //         <div id="square"></div>
    //     </div>
    //     <div className='background-buttom-sh'>
    //         <div id="cone"></div>
    //     </div>
    // </>

    // var shape2 = <>
    //     <div className='background-buttom-sh'>
    //         <div id="rectangle"></div>
    //     </div>
    //     <div className='background-buttom-sh'>
    //         <div id="oval"></div>
    //     </div>
    //     <div className='background-buttom-sh'>
    //         <div id="trapezoid"></div>
    //     </div>
    // </>

    const onClickLeft = () => {
        shapeForm.shape2.unshift(shapeForm.shape1[0])
        shapeForm.shape1.shift(0)
        shapeForm.shape1.push(shapeForm.shape2[shapeForm.shape2.length - 1])
        shapeForm.shape2.pop(shapeForm.shape2.length - 1)
        setShape({
            shape1: shapeForm.shape1,
            shape2: shapeForm.shape2,
        });
    }

    const onClickRight = () => {
        shapeForm.shape1.unshift(shapeForm.shape2[0])
        shapeForm.shape2.shift(0)
        shapeForm.shape2.push(shapeForm.shape1[shapeForm.shape1.length - 1])
        shapeForm.shape1.pop(shapeForm.shape1.length - 1)
        setShape({
            shape1: shapeForm.shape1,
            shape2: shapeForm.shape2,
        });
    }

    const onClickDownAndUp = () => {
        setShape({
            shape1: shapeForm.shape2,
            shape2: shapeForm.shape1,
        });
    }

    const onClickRamdomShape = () => {
        var data_all = shapeForm.shape1
        data_all.push(...shapeForm.shape2)
        var random = shuffle(data_all)
        setShape({
            shape1: random.slice(0, 3),
            shape2: random.slice(3, 6),
        });
    }

    const shuffle = (array: string[]) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    return (
        <div className='body-form'>
            <Row gutter={[8, 8]} className='buttom-back'>
                <Button type="primary" danger onClick={onClickPathHome}>{t('back_home')}</Button>
            </Row>
            <Row className='row-buttom'>
                <div className='background-buttom' onClick={onClickLeft}>
                    <div id="triangle-left"></div>
                </div>
                <div className='background-buttom' onClick={onClickDownAndUp}>
                    <div id="triangle-down"></div>
                </div>
                <div className='background-buttom' onClick={onClickDownAndUp}>
                    <div id="triangle-up"></div>
                </div>
                <div className='background-buttom' onClick={onClickRight}>
                    <div id="triangle-right"></div>
                </div>
            </Row>
            <Row className='row-buttom'>
                {
                    shapeForm.shape1.map((e: any) => {
                        return <div className='background-buttom-sh' onClick={onClickRamdomShape}>
                            <div id={e}></div>
                        </div>
                    })
                }
            </Row>
            <Row className='row-buttom'>
                {
                    shapeForm.shape2.map((e: any) => {
                        return <div className='background-buttom-sh' onClick={onClickRamdomShape}>
                            <div id={e}></div>
                        </div>
                    })
                }
            </Row>

        </div>
    )
}
export default MoveShape