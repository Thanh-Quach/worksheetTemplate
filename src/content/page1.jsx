import { 
	ThetaSymbol,
	Fraction, 
	Degree, 
	Sin, 
	Cos, 
	Tan
} from "epenbook-components";
import { Image } from "react-bootstrap";

export default function Page () {
    return(
		<div>
			<div className="pt-1 pb-2">
				Trigonometry is the branch of mathematics concerned with specific functions of angles and their application to calculations. Trigonometry played an important role in early surveying and navigation. Today, it is used in engineering and scientific community regularly. In this chapter we consider right-angle triangles and the ratio of its sides.
			</div>
			<div>
				<h3 className="py-2"><b>8.1.1 Trigonometric Ratios for Right Triangles</b></h3>
				<div className="border">
				<div className="row">
					<div className="col-8">
						A <b>right triangle</b> has one right angle (90<Degree/>) and two acute angles.
						<p className="">If one of the acute angles is <b></b>, you must be able to determine the side <b>adjacent to <ThetaSymbol/></b>, and the side opposite to <ThetaSymbol/>. The side opposite the right angle is the <b>hypotenuse</b> (this is the longest side).</p>
						<div className="mx-auto p-2"  style={{width: '85%'}}>
							<div className="row align-items-center bg-dark-subtle border">
								<div className="col-3">
									<b>Adjacent</b>
								</div>
								<div className="col-9 py-1">
									This is the side that sits adjacent to (next to) the angle <ThetaSymbol/>.
								</div>
							</div>
							<div className="row align-items-center bg-dark-subtle border">
								<div className="col-3">
									<b>Opposite </b>
								</div>
								<div className="col-9 py-1">
									This is the side that sits opposite to the angle <ThetaSymbol/>.
								</div>
							</div>
							<div className="row align-items-center bg-dark-subtle border">
								<div className="col-3">
									<b>Hypotenuse</b>
								</div>
								<div className="col-9 py-1">
									This is the side that sits opposite to the (90 <Degree/>) angle.
								</div>
							</div>
						</div>
					</div>
					<div className="col-4">
						<div><Image className="w-100" src='assets/Picture1.png'/></div>
					</div>
				</div>
				<div className="row">
					<div className="my-2">
						<p><b>Ratios in Right Triangles</b></p>
						<p className="mt-2">Consider the ratio <Fraction value={['opposite','hypotenuse']}/> for the three similar triangles ABG, ACF, ADE as shown below.</p>
					</div>
					<div className="col-8 pt-2">
						<div><Image className="w-100" src='assets/Picture2.png'/></div>
					</div>
					<div className="col-4 pt-2 row align-items-center">
						<div>
						The three fundamental ratios of trigonometry are:
						<div className="mx-auto p-2" style={{width: '85%'}}>
							<div className="row py-2 align-items-center bg-dark-subtle border">
								<div className="col-8">
									<b>sine</b> of A
								</div>
								<div className="col">
									<Sin/> A
								</div>
							</div>
							<div className="row py-2 align-items-center bg-dark-subtle border">
								<div className="col-8">
									<b>cosine</b> of A
								</div>
								<div className="col">
									<Cos/>⁡ A
								</div>
							</div>
							<div className="row py-2 align-items-center bg-dark-subtle border">
								<div className="col-8">
									<b>tangent</b> of A
								</div>
								<div className="col">
									<Tan/> A
								</div>
							</div>
						</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12 py-2">
						The values for this ratio are <Fraction value={[1,2]}/>, <Fraction value={[2,4]}/>, and <Fraction value={[3,6]}/>. Since all the ratios equal to <Fraction value={[1,2]}/> the ratios are all the same.
						Notice that, if a right triangle has the same acute angles, the ratios would be the same, but if it has different acute angles, the ratios value would be different.
					</div>

				</div>
				</div>
			</div>
		</div>
    )
}